---
title: Meteor Notes
templateEngineOverride: md
---

## Docs

[Walkthrough](https://www.meteor.com/try/)

Atmosphere
[jquery](https://atmospherejs.com/meteor/jquery)

Meteor Wiki
[Using Blaze](https://github.com/meteor/meteor/wiki/Using-Blaze)
[Blaze](https://www.meteor.com/blaze)

### Windows

https://github.com/meteor/meteor/wiki/Supported-Platforms
https://trello.com/b/hjBDflxp/meteor-roadmap

## Guides

[Sortable Lists In Meteor using JQuery UI](http://differential.com/blog/sortable-lists-in-meteor-using-jquery-ui)
[example](http://sortable-lists-jqueryui.meteor.com/)

[Reactive Form Validation with Meteor Tracker.autorun](https://www.youtube.com/watch?v=4uXzOKhn0g8)
[example](http://jsfiddle.net/chicagogrooves/y18er7wr/)

[Meteor for Windows, UI frameworks for Meteor and More](https://meteorhacks.com/meteor-for-windows-ui-frameworks-bulletproof-meteor.html)

[Angular / Meteor](http://angularjs.meteor.com/)
[Your Meteor app probably doesn’t need Angular](https://medium.com/space-camp/your-meteor-app-probably-doesnt-need-angular-13986a0323f6)

[BulletProof Meteor](https://bulletproofmeteor.com/)

[Youtube Channel](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw)

[Meteor w/ Bootstrap](http://www.manuel-schoebel.com/blog/meteorjs-and-twitter-bootstrap---the-right-way)

[Meteor Pad](http://meteorpad.com)
[Blog](https://www.meteor.com/blog/2014/09/01/meteorpad-meteor-code-playground) | [Youtube](https://www.youtube.com/watch?v=zF2iBgS9qJU)

[A Guide to Meteor Templates & Data Contexts](https://www.discovermeteor.com/blog/a-guide-to-meteor-templates-data-contexts/)

[Spacebars Overview](https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md)

[Understanding Spacebars](http://meteorcapture.com/spacebars/)

[Fastosphere - Fast Atmosphere](http://fastosphere.meteor.com/)

[Common Mistakes](https://dweldon.silvrback.com/common-mistakes)

[Meteor Pattern: Template-Level Subscriptions](https://www.discovermeteor.com/blog/template-level-subscriptions/)

[Spacebars Secrets: Exploring Meteor Templates](https://www.discovermeteor.com/blog/spacebars-secrets-exploring-meteor-new-templating-engine/)

Font Awesome
https://github.com/nate-strauser/meteor-font-awesome
https://atmospherejs.com/natestrauser/font-awesome

**Offline Data Access**
http://www.meteorpedia.com/read/Offline_Data
https://blog.groupbuddies.com/posts/45-offline-web-apps-with-meteor
http://stackoverflow.com/questions/26512764/current-status-of-meteor-for-offline-application
https://atmospherejs.com/ground/db
http://grounddb.meteor.com/
http://en.wikipedia.org/wiki/Distributed_Data_Protocol
https://github.com/meteor/meteor/blob/master/packages/ddp/DDP.md

**Listing Users**:
http://docs.meteor.com/#/full/meteor_users
[Listing all users on client with meteor](http://stackoverflow.com/q/13537777/1366033)
[How do you conditionally send data to the client in Meteor?](http://stackoverflow.com/q/14074434/1366033)
[How to get current user's username with Meteor](http://stackoverflow.com/q/26728155/1366033)
[How to get Meteor.user() to return on the server side?](http://stackoverflow.com/q/16532316/1366033)

## Commands

Powershell ISE Kill Process    
    http://superuser.com/a/875912/180163
    <kbd>Ctrl</kbd>+ <kbd>fn</kbd>+ <kbd>Shift *(right)*</kbd>

Powershell
   <kbd>Ctrl</kbd> + <kbd>C</kbd>
    
```bash
# Create App
meteor create <app name>
    
# Start App
meteor
```

[Meteor Version](http://stackoverflow.com/a/18291969/1366033)

```bash
meteor --version
```

### Deployment

[MUP - Meteor UP Deployment](https://github.com/arunoda/meteor-up)

[Meteor Tips - Deployment](http://meteortips.com/book/deployment/)

```bash
meteor list-sites
meteor deploy name.meteor.com
meteor deploy name.meteor.com --delete
```

### Bootstrap Material Design
https://github.com/FezVrasta/bootstrap-material-design
http://fezvrasta.github.io/bootstrap-material-design/
http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html
https://atmospherejs.com/fezvrasta/bootstrap-material-design

### Accounts

##### Configure Google

**Their Instructions**:

1. Visit https://code.google.com/apis/console/
2. "Create Project", if needed. Wait for Google to finish provisioning.
3. On the left sidebar, go to "APIs & auth" and, underneath, "Consent Screen". Make sure to enter a product name, and save.
4. On the left sidebar, go to "APIs & auth" and then, "Credentials". "Create New Client ID", then select "Web application" as the type.
5. Set Authorized Javascript Origins to: http://localhost:3000/
6. Set Authorized Redirect URI to: http://localhost:3000/_oauth/google
7. Finish by clicking "Create Client ID".

**My Instructions**:

1. Go to https://console.developers.google.com/project
2. Enter a Project Name and ID
  * MeteorTest
  * meteor-test-123
3. [All Projects](https://console.developers.google.com/project)
4. [meteor-test-123 project](https://console.developers.google.com/project/meteor-test-123)
5. Go to APIs & Auth > Consent Screen
6. Enter Product name plus any optional info and hit save

[Reset Login Information](http://stackoverflow.com/q/17098307/1366033)

[Meteor.js Google Oauth issues](http://stackoverflow.com/q/17960606/1366033)
> Error: redirect_uri_mismatch The redirect URI in the request: 
http://localhost:3000/_oauth/google?close 
did not match a registered redirect URI

### Iron Router

[iron-meteor/iron-controller](https://github.com/iron-meteor/iron-controller)
[iron-meteor/iron-router](https://github.com/iron-meteor/iron-router)
[Iron Router Guide](https://github.com/iron-meteor/iron-router/blob/devel/Guide.md)
[Iron-Router Tutorial](http://www.manuel-schoebel.com/blog/iron-router-tutorial)

[iron:router package | Atmosphere](https://atmospherejs.com/iron/router)

## Notes

### JavasScript - Shuffle Array
[How to randomize (shuffle) a JavaScript array?](http://stackoverflow.com/q/2450954/1366033)
[Fisher–Yates Shuffle](http://bost.ocks.org/mike/shuffle/)

#### Wait Till subscriptionsReady??
[Waiting for meteor collection to finish before next step](http://stackoverflow.com/q/20942025/1366033)
[Meteor : wait until all templates are rendered](http://stackoverflow.com/q/25766341/1366033)

### Exception in template helper: TypeError: undefined is not a function
* [One](http://stackoverflow.com/q/25758476/1366033)
* [Two](http://stackoverflow.com/q/22574393/1366033)
* [Three](http://stackoverflow.com/q/27077513/1366033)

### pass id into publish data
[How do you conditionally send data to the client in Meteor?](http://stackoverflow.com/q/14074434/1366033)

### meteor get users
[Listing all users on client with meteor](http://stackoverflow.com/q/13537777/1366033)

### Call Helper from other helper
[Meteor, how to access to a helper from another helper?](http://stackoverflow.com/q/17229302/1366033)
[Meteor.js: how to call helper method from event?](http://stackoverflow.com/q/27304409/1366033)
[Calling one helper from another helper within the context of a template](http://stackoverflow.com/q/26414985/1366033)

### Format Date
http://stackoverflow.com/a/17874408/1366033

**JavaScript**

```js
Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
});
```

**Template**

```html
{{prettifyDate timestamp}}
```

#### Document Ready
http://stackoverflow.com/q/25340582/1366033

```js
// jQuery
$(function() {
});

// Meteor
Meteor.startup(function() {
});
```

#### Event Handling

http://stackoverflow.com/q/27116880/1366033

```js
// jQuery
$("button").click(function() {
});

// Meteor
Template.mmyTemplate.events({
    "click button": function(event, template) {
    }
});
```

#### Reactive Document Title

[handlebars support for `<head>` element](https://github.com/meteor/meteor/issues/266)
[Meteor - Setting the document title](http://stackoverflow.com/a/25657619/1366033)

```js
Meteor.autorun(function () {
    document.title = "Document title which is reactive: " + Session.get("title part");
});
```

## Tooling

#### Resharper

Unexpected Tag Warning

#### Autocomplete

Autcomplete and syntax highlighting for templates
http://madskristensen.net/post/visual-studio-extensions-for-web-developers
http://vswebessentials.com/

#### Visual Studio

[Node.js support firmed up for Visual Studio 2013! Meteor.js next?](https://groups.google.com/forum/#!msg/meteor-talk/9G-cgKA9Oxw/BcdMEh9brKgJ)
[Meteor, Windows, and the new FREE Visual Studio Professional 2013](https://groups.google.com/forum/#!topic/meteor-talk/pv5G5T3I8Fk)

#### WebStorm

https://www.jetbrains.com/webstorm/help/using-meteor.html

[Meteor Support in WebStorm 9](http://blog.jetbrains.com/webstorm/2014/09/meteor-support-in-webstorm-9/)

Git.exe Not Working:
http://stackoverflow.com/a/16127984/1366033

Add: `%LocalAppData%\GitHub\PortableGit_<numbersandletters>\bin\git.exe`

[File Status](https://www.jetbrains.com/webstorm/help/file-status-highlights.html)
[GitIgnore](https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore)
[Terminal](https://www.jetbrains.com/webstorm/help/terminal.html)

**Debugging**:
http://stackoverflow.com/q/14751080/1366033
https://www.youtube.com/watch?v=yeqkGF3Z7rU

[JavaScript Editor Style](https://www.jetbrains.com/webstorm/help/code-style-javascript.html)

#### Vim / Emacs / Sublime Text

http://devblog.me/meteor-plus-text-editor.html
https://www.youtube.com/watch?v=CcPZ56t8x4I
https://github.com/Slava/tern-meteor

## Errors

#### Unexpected mongo exit code 100

**Message**: 

> => Started proxy.
Unexpected mongo exit code 100. Restarting.
Unexpected mongo exit code 100. Restarting.
Unexpected mongo exit code 100. Restarting.
Can't start Mongo server.
MongoDB had an unspecified uncaught exception.
This can be caused by MongoDB being unable to write to a local database.
Check that you have permissions to write to .meteor/local. MongoDB does
not support filesystems like NFS that do not allow file locking.

**Articles**:

 * [Meteor: unexpected mongo exit code 100](http://stackoverflow.com/a/15610560/1366033)
 * [Using the Remove-Item Cmdlet](https://technet.microsoft.com/en-us/library/ee176938.aspx)
 * [Cmd](http://ss64.com/nt/del.html)

**Solution**:

```ps
Remove-Item .meteor/local/db/mongod.lock
```

```cmd
del .meteor/local/db/mongod.lock
```

#### Can't listen on port 3000

**Message**: 

> Can't listen on port 3000. Perhaps another Meteor is running?
> Running two copies of Meteor in the same application directory will not work. If something else is using port 3000, you can specify an alternative port with --port `<port>`.

**Articles**:

 * [Change Port](http://stackoverflow.com/a/10186390/1366033)
 * [Kill Meteor](http://stackoverflow.com/a/28423731/1366033)

**Solution**:
```ps
# Change Port
meteor --port 3002

# kill Meteor
taskkill /f /im mongod.exe
taskkill /f /im node.exe

```

[Kill Multiple Process](http://www.howtogeek.com/111130/application-not-responding-heres-how-to-kill-processes-with-powershell/)
kill -processname mongod.exe, node.exe

#### Windows Firewall has blocked some features of this app

**Message**: 

> Windows Firewall has blocked some features of this app
Windows firewall has blocked some features of Evented I/O for V8 JavaScript on all public and private networks
**Name**: Evented I/O for V8 for Javascript  
**Publisher**: Joyent, Inc  
**Path**: %LocalAppData%\.meteor\packages\meteor-tool\1.1.0-winr.7\mt-os.windows.x86_32\dev_bundle\bin

**Articles**:

* [Windows Firewall has blocked some features of this app](https://github.com/meteor/windows-preview/issues/61)

**Solution**:

Don't worry about it.  It only has to do that the first time each node installer runs.


#### Meteor isn't running a local MongoDB server

**Message**: 

> mongo: Meteor isn't running a local MongoDB server.

> This command only works while Meteor is running your application locally. Start your application first. (This error will also occur if you asked Meteor to use a different MongoDB server with $MONGO_URL when you ran your application.)

> If you're trying to connect to the database of an app you deployed with 'meteor deploy', specify your site's name with this command.   

#### Your app is crashing

**Message**: 

>Your app is crashing. Here's the latest log.
 C:\Users\Kyle\AppData\Local\.meteor\packages\meteor-tool\1.1.0-winr.7\mt-os.windows.x86_32\dev_bundle\server-lib\node_modules\fibers\future.js:173
                        throw(ex);
                              ^
ReferenceError: Monogo is not defined
    at app\simple-todos.js:1:48
    at app\simple-todos.js:18:3
    at C:\Users\Kyle\Documents\GitHub\MeteorApps\simple-todos\.meteor\local\build\programs\server\boot.js:218:10
    at Array.forEach (native)
    at Function._.each._.forEach (C:\Users\Kyle\AppData\Local\.meteor\packages\meteor-tool\1.1.0-winr.7\mt-os.windows.x86_32\dev_bundle\server-lib\node_modules\underscore\underscore.js:79:11)
    at C:\Users\Kyle\Documents\GitHub\MeteorApps\simple-todos\.meteor\local\build\programs\server\boot.js:117:5
Exited with code: 8
Your application is crashing. Waiting for file change.

#### Can't render headers after they are sent to the client

**Message**:  
> At line:1 char:1
    + meteor
    + ~~~~~~
        + CategoryInfo          : NotSpecified: (:String) [], RemoteException
        + FullyQualifiedErrorId : NativeCommandError
    http.js:731
        throw new Error('Can\'t render headers after they are sent to the client.'
              ^
    Error: Can't render headers after they are sent to the client.
        at ServerResponse.OutgoingMessage._renderHeaders (http.js:731:11)
        at ServerResponse.writeHead (http.js:1152:20)
        at ProxyServer.<anonymous> 
    (C:\Users\Kyle\AppData\Local\.meteor\packages\meteor-tool\1.1.0-winr.7\mt-os.windows.x86_32\tools\run-proxy.js:96:21)
        at ProxyServer.emit (C:\Users\Kyle\AppData\Local\.meteor\packages\meteor-tool\1.1.0-winr.7\mt-os.windows.x86_32\de
    v_bundle\lib\node_modules\eventemitter3\index.js:100:27)
        at ClientRequest.proxyError (C:\Users\Kyle\AppData\Local\.meteor\packages\meteor-tool\1.1.0-winr.7\mt-os.windows.x
    86_32\dev_bundle\lib\node_modules\http-proxy\lib\http-proxy\passes\web-incoming.js:140:16)
        at ClientRequest.emit (events.js:117:20)
        at Socket.socketErrorListener (http.js:1551:9)
        at Socket.emit (events.js:95:17)
        at net.js:440:14
        at process._tickCallback (node.js:419:13) 


**Articles**:

* http://stackoverflow.com/a/7789131/1366033
* https://github.com/meteor/meteor/issues/2842
* https://github.com/crazytoad/meteor-collectionapi/issues/16

#### Running Meteor Deploy from Powershell

**Message**:  

> meteor : To instantly deploy your app on a free testing server, just enter your email
At line:1 char:1
+ meteor deploy Kyle-Todos.meteor.com
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To instantly de...nter your email:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
address!
Email: 


**Articles**:

* https://github.com/meteor/windows-preview/issues/77


#### This file has been modified outside source editor

**Message**:  

> **Microsoft Visual Studio** 
> This file has been modified outside source editor.
> Do you want to reload it?

![Visual Studio Reload Files](https://i.imgur.com/fN2Pdbs.png)

**Articles**:

* http://stackoverflow.com/a/20255971/1366033

**Solution**:

Go to Tools > Environment > Documents > Check "Auto-load changes, if saved"

![Auto Load changes If Saved](https://i.imgur.com/2COFhBI.png)

#### (STDERR) Error: EBADF

**Message**:

> => Meteor server restarted
W20150221-19:03:26.633(-5)? (STDERR) Error: EBADF, read

**Articles**:

* http://stackoverflow.com/q/26737053/1366033
* http://stackoverflow.com/q/6688552/1366033

## Tips

#### [Nuget Package Manager Shortcut](http://stackoverflow.com/q/18424466/1366033)

<kbd>Alt</kbd>, <kbd>T</kbd>, <kbd>N</kbd>, <kbd>O</kbd>

Map Your own: Tools > Options > Environment > Keyboard > `ViewPackageManagerConsole`

![Environment > Keyboard](https://i.imgur.com/b68D2W0.png)

<kbd>Ctrl</kbd> + <kbd>P</kbd>, + <kbd>Ctrl</kbd> + <kbd>M</kbd>

#### JsHint (W117): 'Meteor' is not defined

http://vswebessentials.com/features/general
http://catatron.com/node-jscs/
http://catatron.com/node-jscs/rules/
https://github.com/jscs-dev/node-jscs
http://jshint.com/docs/

`Operator = should stick to following expression`

[Add file `.jshintrc` to directory with:]
(http://stackoverflow.com/a/17709922/1366033)

```js
{
  "globals": { "Meteor": true }
}
```

In Windows, to create file without name shift + right click on folder to "Open Command Window Here".  Then run `echo text > .extension`

[Multiline redirector `>>`](http://stackoverflow.com/a/1250290/1366033)

```bash
echo { > .jshintrc
echo  "globals": { "Meteor": true } >> .jshintrc
echo } >> .jshintrc
```

#### Add JS References

* [Get VS javascript intellisense for js in a different file](http://stackoverflow.com/a/12863533/1366033)
* [JScript IntelliSense Overview](https://msdn.microsoft.com/en-us/library/bb385682(v=vs.100).aspx)


```js
/// <reference path=".meteor/local/build/programs/web.browser/packages/" />
/// <reference path=".meteor/local/build/programs/server/packages/" />
```
