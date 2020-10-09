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

## Visual Studio Code

* [Change keyboard shortcut bindings in Visual Studio Code?](https://stackoverflow.com/a/33791170/1366033)
* [VS Code - Mouse Wheel Zoom](https://stackoverflow.com/q/30192884/1366033)

## Table Storage

* [Table Storage](https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-dotnet#delete-a-table)
* [Table Storage Batch](https://docs.microsoft.com/en-us/azure/visual-studio/vs-storage-aspnet5-getting-started-tables#insert-a-batch-of-entities)
* [Table Storage Keys](https://blog.maartenballiauw.be/post/2012/10/08/what-partitionkey-and-rowkey-are-for-in-windows-azure-table-storage.html)
* [Post Data w/ Postman](https://stackoverflow.com/a/45213695/1366033)
* [Delete All Records](https://stackoverflow.com/q/26326413/1366033)

## Vue

* [Fetching Data](https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/)
* [Order Data](https://stackoverflow.com/a/40512856/1366033)
* [Reactive Time](https://cushionapp.com/journal/reactive-time-with-vuejs)
* [Create a countdown with vue.js an moment.js](https://stackoverflow.com/q/52048451/1366033)
* [Event Handling `v-on` directive](https://vuejs.org/v2/api/#v-on)
* [Class & Style Binding](https://vuejs.org/v2/guide/class-and-style.html)
* [Conditional Class](https://stackoverflow.com/a/43210564/1366033)
* [Add LocalStorage](https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b)
* [Offline States](https://github.com/filrak/vue-offline)

## LoDash

* [Order Collection](https://lodash.com/docs/4.17.10#orderBy)
* [Find Collection](https://lodash.com/docs/4.17.11#find)

## moment.js

* [Add duration to moment date](https://stackoverflow.com/a/44110303/1366033)

## Bootstrap 4

* [Does bootstrap have builtin padding and margin classes?](https://stackoverflow.com/a/46329924/1366033)
* [What is class=“mb-0” in Bootstrap 4?](https://stackoverflow.com/q/41574776/1366033)
* [Spacing Utilities](https://getbootstrap.com/docs/4.1/utilities/spacing/)
* [Sticky Top](https://getbootstrap.com/docs/4.0/utilities/position/#sticky-top)
* [Feedback Icons BS 3](https://stackoverflow.com/a/18839305/1366033)
* [Form Validation](https://getbootstrap.com/docs/4.0/components/forms/#validation)


-----




## Eleventy

* [Allow shortcodes to return promises #429](https://github.com/11ty/eleventy/issues/429)
* [Nunjucks Asynchronous Shortcodes](https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-shortcodes)
* [Ignore Directory](https://www.11ty.dev/docs/ignores/)
* [Escape curly brackets in nunjucks](https://github.com/mozilla/nunjucks/issues/604)
* [Escape curly brackets in nunjucks](https://github.com/mozilla/nunjucks/issues/388)
* [Creating an 11ty Plugin - SVG Embed Tool](https://bryanlrobinson.com/blog/creating-11ty-plugin-embed-svg-contents/)
* [How to disable cross-device action mirroring functionality of BrowserSync?](https://stackoverflow.com/a/59514293/1366033)

## Nunjucks

* [nunjucks: Template not found](https://stackoverflow.com/q/39050788/1366033)

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

## Node.JS

* [Setting Environment Variables for Node to retrieve](https://stackoverflow.com/a/34154491/1366033)
* [Managing Environment Variables in Node.js with dotenv](https://stackabuse.com/managing-environment-variables-in-node-js-with-dotenv/)
* [motdotla/**dotenv**](https://github.com/motdotla/dotenv)
* *ALT*: [erisanolasheni/**custom-env**](https://github.com/erisanolasheni/custom-env)
* [How do you properly promisify request?](https://stackoverflow.com/q/28308131/1366033)
* [Using filesystem in node.js with async / await](https://stackoverflow.com/a/58332163/1366033)
* [Why does Node.js' fs.readFile() return a buffer instead of string?](https://stackoverflow.com/q/6456864/1366033)
* [How do I get the path to the current script with Node.js?](https://stackoverflow.com/q/3133243/1366033)
* [I'd like to remove the filename from a path using JavaScript](https://stackoverflow.com/a/59506376/1366033)
* [vscode debug code in node_modules directory](https://stackoverflow.com/a/53081698/1366033)
* [Is it possible to blackbox vendor code when using VSCode's node debugger?](https://stackoverflow.com/a/48621036/1366033)
* [writeFile no such file or directory](https://stackoverflow.com/a/50927704/1366033)
* [Determine project root from a running node.js application](https://stackoverflow.com/a/18721515/1366033)
* [How to set environment variables from within package.json](https://stackoverflow.com/a/27090755/1366033)

## JavaScript

* [javascript check if property is undefined](https://stackoverflow.com/a/416327/1366033)
* [Easy Creation of HTML with JavaScript’s Template Strings](https://wesbos.com/template-strings-html/)
* [HTML Templates via JavaScript Template Literals](https://css-tricks.com/html-templates-via-javascript-template-literals/)
* [ES6 Object Destructuring Default Parameters](https://stackoverflow.com/a/26578323/1366033)
* [How do I replace all line breaks in a string with `<br />` tags?](https://stackoverflow.com/a/784547/1366033)

## CSS

* [CSS Image size, how to fill, not stretch?](https://stackoverflow.com/a/29103071/1366033)

## NPM

* [Peer Dependencies](https://nodejs.org/es/blog/npm/peer-dependencies/)
* [Installing a local module using npm?](https://stackoverflow.com/a/8089029/1366033)
* [npm link docs](https://docs.npmjs.com/cli/link)
* [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
* [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
* [How to publish packages to npm (the way the industry does things)](https://zellwk.com/blog/publish-to-npm/)
* [What is the meaning of the “at” (@) prefix on npm packages?](https://stackoverflow.com/q/36667258/1366033)

## Netlify

* [Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)

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


## Visual Studio Code

**Tasks**:

* [VS Code Tasks](https://code.visualstudio.com/docs/editor/tasks)
* [Is it possible to assign different shortcuts to different tasks in VS Code?](https://stackoverflow.com/q/30057191/1366033)
* [Can I automatically start a task when a folder is opened?](https://stackoverflow.com/q/34103549/1366033)
* [Launching a website via command line](https://stackoverflow.com/a/23039509/1366033)

**Typings**:

* [ATA - Automatic Type Acquisition](https://code.visualstudio.com/docs/languages/javascript#_automatic-type-acquisition)
* [jQuery Intellisense in VS Code](https://stackoverflow.com/q/33902077/1366033)


-----



* [React - Get version number from package.json](https://stackoverflow.com/a/50822003/1366033)
* [React - Import JSON Data](https://stackoverflow.com/a/45662052/1366033)
* [React - Update State](https://learn.co/lessons/react-updating-state)
* [React - Increment State](https://stackoverflow.com/a/39316556/1366033)
* [React - Distinguish between Left and Right click events](https://stackoverflow.com/q/31110184/1366033)
* [React - 'this' becomes undefined when called from onClick](https://github.com/facebook/react/issues/5040#issuecomment-362503705)
* [React - Prevent Default](https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46)
* [React - Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator)
* [React - handle the `onKeyPress` event in ReactJS?](https://stackoverflow.com/a/35707795/1366033)
* [React - conditionally applying class attributes](https://stackoverflow.com/a/30533260/1366033)
* [ES Lint - Anchor is Valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)
* [JS - What's the most elegant way to cap a number to a segment?](https://stackoverflow.com/a/11409944/1366033)
* [CSS - transition height: 0; to height: auto; using CSS?](https://stackoverflow.com/a/8331169/1366033)


-----



* [Vue - Hide the VueJS while loading?](https://stackoverflow.com/a/36187668/1366033)

-----



### JavaScript

* [js - get characters between slashes](https://stackoverflow.com/q/8519734/1366033)
* [js - get the second to last item of an array](https://stackoverflow.com/a/24331358/1366033)
* [js - Async and Await with Array.map()](https://flaviocopes.com/javascript-async-await-array-map/)

### Node

* [node - Using filesystem in node.js with async / await](https://stackoverflow.com/a/58332163/1366033)
* [node - how to create a directory if doesn't exist?](https://stackoverflow.com/q/21194934/1366033)
* [node - skip internal modules](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_skipping-uninteresting-code-node-chrome)


-----


### Vue CLI

* [Vue CLI Config - `publicPath`](https://cli.vuejs.org/config/#publicpath)
* [Vue CLI Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html#modes)

### Bootstrap Vue

* [Navbar](https://bootstrap-vue.js.org/docs/components/navbar)
* [Navbar Collapse / Toggle Breakpoint](https://bootstrap-vue.js.org/docs/components/navbar#comp-ref-b-navbar-props)
* [Router Link Support](https://bootstrap-vue.js.org/docs/reference/router-links/)
* [Router Link Active Style](https://stackoverflow.com/questions/46083220/how-to-vuejs-router-link-active-style)

### Vue Router

* [Router Transitions](https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition)
* [Router Transitions Demo](https://markus.oberlehner.net/blog/vue-router-page-transitions/)
* [History Mode](https://router.vuejs.org/guide/essentials/history-mode.html)

### WebPack

* [ES Lint Line breaks](https://stackoverflow.com/a/44662845/1366033)
* [Static Asset - Relative Path Imports via File Loader](https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling)

### Vue-Markdown

* [Syntax Demo](https://miaolz123.github.io/vue-markdown/)
* [Register the VueMarkdown component as a global component](https://github.com/miaolz123/vue-markdown/issues/61)

### Netlify

* [Deploying Vue CLI to Netlify](https://cli.vuejs.org/guide/deployment.html#netlify)
* [Index Redirects](https://www.netlify.com/docs/redirects/#rewrites-and-proxying)


-----



* [11ty - Data Files](https://www.11ty.io/docs/data-js/)
* [11ty - Includes](https://mozilla.github.io/nunjucks/templating.html#include)
* [Node - List Directory](https://stackoverflow.com/q/2727167/1366033)
* [JS - Replace all occurrences of a string](https://stackoverflow.com/q/1144783/1366033)
* [JS - Check if string in another string (`includes`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
* [SVG - How to “use” local “defs” in SVG](https://stackoverflow.com/q/16123721/1366033)
* [Img - Convert SVG to ICO](https://convertio.co/svg-ico/)


-----



## Resources

* [CSS - Using `box shadows` and `clip-path` together](https://css-tricks.com/using-box-shadows-and-clip-path-together/)
* [CSS - Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
* [Fonts - Google Fonts](https://fonts.google.com/specimen/Overlock)
* [Fonts - Embed Google Fonts](https://stackoverflow.com/a/53674218/1366033)

### Tools

* [Image to Data URI converter](https://ezgif.com/image-to-datauri)
* [Clippy](https://bennettfeely.com/clippy/)
* [Transparent Textures](https://www.transparenttextures.com/)
* [MetaTags](https://metatags.io/)

