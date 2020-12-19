---
templateEngineOverride : md
---

<!-- markdownlint-disable MD024 -->

# Meteor Notes


## Meteor Commands

```bash
ls
cd Documents/GitHub/MeteorApps
meteor create microscope

cd microscope

rm microscope.html
rm microscope.js
rm microscope.css

mkdir client
mkdir server
mkdir public
mkdir lib

cd client

touch main.html
touch main.js

mkdir stylesheets
cd stylesheets

touch style.css
```


## Folder Structure

* Code in the `/server` directory only runs on the server.
* Code in the `/client` directory only runs on the client.
* Everything else runs on both the client and server.
* Your static assets (fonts, images, etc.) go in the `/public` * directory.
* `.meteor` hidden folder for internal use only
* Load Order:
  * Files in `/lib` are loaded **before** anything else.
    * Any `main.*` file is loaded **after** everything else.
    * alphabetical order based on the file name.


### Deployment Steps

[MUP - Meteor UP Deployment](https://github.com/arunoda/meteor-up)

[Meteor Tips - Deployment](http://meteortips.com/book/deployment/)

```bash
meteor list-sites
meteor deploy name.meteor.com
meteor deploy name.meteor.com --delete
```


## Deployment Info

* [projectname.meteor.com](http://docs.meteor.com/#/full/deploying) - Free and Easy
* Platform As A Service - PaaS
  * [Modulus](https://modulus.io/)
  * [Heroku](https://www.heroku.com/)
  * [Modulus vs Heroku vs Digital Ocean](http://joshowens.me/modulus-vs-heroku-vs-digital-ocean/)
  * [Stack Share Comparison - Modulus vs Heroku](http://stackshare.io/stackups/heroku-vs-modulus)
  * [Compose](https://www.compose.io/) for database
* [Meteor UP (MUP)](https://github.com/arunoda/meteor-up) - Helps with custom deployments
  * [`npm install -g mup`](https://www.npmjs.com/package/mup)
    * [`sudo chown -R $USER /usr/local`](http://foohack.com/2010/08/intro-to-npm/#what_no_sudo)
  * You'll need a server
    * [Digital Ocean](https://www.digitalocean.com/signup/)
      * [How To](https://www.digitalocean.com/community/questions/deploying-a-meteor-js-app-to-digital-ocean-servers)
      * [How To](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-meteor-js-application-on-ubuntu-14-04-with-nginx)
      * [Setup MUP](http://meteortips.com/deployment-tutorial/digitalocean-part-1/)
      * [DNS Setup](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
        * `whois domain.com`
        * `ping domain.com`
    * My Deployment
      * https://cloud.digitalocean.com/droplets/6050941
      * http://www.fitnally.com/
      * http://104.131.178.140/
    * [Amazon Web Service (AWS)](http://aws.amazon.com/)
      * https://aws.amazon.com/free/
      * [How To](http://docs.aws.amazon.com/gettingstarted/latest/wah-linux/web-app-hosting-intro.html)
      *[Setup MUP](http://stackoverflow.com/questions/21288284/aws-ec2-deploy-w-meteor-mup-config)

* 3 Options to Persist Data
  * Browser's Memory - Javascript
  * Browser's Storage - Local to user, available across all tabs - not easily shareable with others
  * Server-side database - only permanent storage

* Consoles
  * Javascript console - output from client's  `console.log()`
    * `console.table(Posts.find().fetch())`
  * Meteor Terminal - output from server's `console.log()`
  * Meteor Shell - Interact with server code `meteor shell`
  * Mongo Shell - Interact with Mongo Database `meteor mongo`
    * `db.posts.insert({title: "Mongo Shell Post"})`
    * `db.posts.find()`

* Inserting Data
  * Mongo Shell
  * Robo Mongo
  * JS Shell

* Access published app at *.meteor.com
  * `meteor mongo myApp`
  * `meteor logs myApp`

* Create collection
  * `Posts = new Mongo.Collection('posts');`
  * Server - when this runs on the server, it creates an API into the Mongo DB
  * Client - when this same code runs on the client, it creates an in-browser Mongo Collection on MiniMongo
    * "Cache" or "subset" of whole collection - based on any filtering

* MongoDB
  * `find()` - returns a *cursor* which is a **reactive data source**. Meteor knows how to iterate over a cursor - so we don't really need fetch unless we want to log
  * `fetch()` - call fetch on the cursor to transform into an array.

* DOM Changes - Reactive Updating
  1. Select element in Dev Tools
  2. Add another item to database (perhaps from console)
  3. Same element is still selected - means it wasn't refreshed



### Github

* [2.6 Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
* [2.7 Git Basics - Git Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)
* [How to alias 'git checkout' to 'git co'?](http://stackoverflow.com/q/14489109/1366033)
* [Git, see a list of comments of my last N commits](http://stackoverflow.com/q/13542213/1366033)
* [Switch to another GIT tag](http://stackoverflow.com/q/4330610/1366033)

```bash
# Alias checkout as co
git config --global alias.co checkout

# show last 5 commits
git log --oneline -n 5

# list tags
git tag

# create tag
git tag -a pres-1 -m "Created Demo" 843d95d

# publish tags
git push origin --tags

# checkout tags
git checkout tags/pres-1


```

## Spacebars

* Inclusions `{{> templateName}}`
* Expressions `{{title}}`
* Block Helpers `{{#if}} ... {{/if}}`

## Javascript

* Helpers are sort of like controllers.  They tell the page what to do


## Read the Docs

[Underscore](http://underscorejs.org/)

## Tools

[Sublime Text Autocomplete](https://github.com/Slava/tern-meteor-sublime)

## Reveal.js

[Intro](https://github.com/hakimel/reveal.js/blob/master/README.md)
[Using Reveal.JS on GitHub Pages](https://cynng.wordpress.com/2014/10/08/using-reveal-js-on-github-pages-for-your-presentations/)
[Deploy reveal.js slideshow on github-pages](http://www.tikalk.com/devops/deploy-revealjs-slideshow-github-pages/)

## Dev Hotkeys

Ctrl + M - Open Meteor Toys
Cmd + Opt + I - Dev Tools
  Esc (with dev tools open) - open console
Cmd + Opt + U - View Source

## Remove Autopublish

Autopublish package mirrors all data from the database to the client

`meteor remove autopublish`

Add in our own publish and subscribe

**Publish** - return a cursor to collection

```js
Meteor.publish('posts', function() {
  return Posts.find();
});
```

We're still returning the full collection - but now we can exact control more easily.

**Subscribe** - on client, subscribe to publication

```js
Meteor.subscribe('posts');
```

**Notes**: App database might contain thousands of documents, some of which are sensitive.  So don't publish everything for security and scalability.

Only publish data you want the client to have access to.

Any data you subscribe to will be mirrored on the client. Perhaps only display data for current user:

```js
// server
Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
});
// client
Meteor.subscribe('posts', 'bob-smith');
```

You still uses the global collection object that you wrote on the Client and Server.  Publish and subscribe just dictates what data gets sent to that collection on the client and which client apps are listening. If you want to further refine the subscribed data, you can do that when returning your collection to the template through the helper function which makes objects accessible to the Template.  You can filter even further like this:

```js
Template.posts.helpers({
  posts: function() {
    return Posts.find({author: "bob-smith", category: "JavaScript"});
  }
})
```

### Routing

[Iron Router](https://github.com/EventedMind/iron-router)

```bash
meteor add iron:router
```

* **Routes** - basic building block. tells the app what to do for a url
* **Paths** - URL within the app
* **Hooks** - Actions you'd like to preform before, during or after a route
* **Filters** - Global hooks
* **Route Templates** Each route needs to point to a template.  If you cannot afford a template one will be provided for you based on the name of the route.
* **Layouts** - Frame/wrapper for content
* **Controllers** - Re-using code. Inherit from single routing controller

Iron router takes over what renders inside of `<body>`. We will place dynamic content into the `{{yield}}` template

![Layout Example](http://i.imgur.com/puuj4lz.png)

Add layout template
Add yield section to it

Haven't yet told router what to do:

#### Default Example

```js
Router.route('/', function () {
  this.render('Home', {
    data: function () { return Items.findOne({_id: this.params._id}); }
  });
});
```

Add `router.js` to `/lib` directory

#### Explicit Route

```js
Router.route('/', {name: 'postsLists'});
```

#### Implicit Route

```js
//url: http://localhost:3000/postsList
<template name="postsLists"></template>
// automatically use {{>PostsLists}} in {{>yield}}
```

Named Routes - allow to build relative urls within app using `{{pathFor}}` helper - i.e.

```html
<a href="{{pathFor 'postsList'}}">List of Posts</a>
```

How does path for know where to get the ID?

**It's in the Data Context!!** - Look at `Blaze.getData($0)`

Manually specify with `{{pathFor 'postsList' someOtherPost}}`

[HTML5 Push State](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history?redirectlocale=en-US&redirectslug=Web%2FGuide%2FDOM%2FManipulating_the_browser_history)

#### 404 Page

```js
Router.configure({
  notFoundTemplate: 'notFound'
});
```

```html
<template name="notfound">
  <div>
    <h2>404</h2>
    <p>Whoops!  We can't find the link you were looking for</p>
  </div>
</template>
```

#### Valid Route but Invalid Data

```js
// Load notFoundTemplate if data returns falsy value on the postPage route
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
```

##### Wait For Data

Wait to render template until data is ready.  We have to move our subscribe to our routing engine.  Then show a loading template in the mean time

```js

Router.configure({
  layoutTemplate: 'layout',
  // for *every* route, wait till we have at least this data
  waitOn: function() {
    return Meteor.subscribe('posts');
  },
  // until we get something - here's a template to use while loading
  loadingTemplate: 'loading'
});
```

#### Loading Template

```bash
meteor add sacha:spin
```

```html
{{>spinner}}
```

#### Dynamic Routes

Dynamic routes allow you to define a single route template and pass in relevant data

#### Route Syntax

```js
Router.route('posts/:_id', {name: 'postPage'});
```

**Match URL** - `:_id` tells route to match anything of url `/posts/xyz/`
**Build Data Context** - whatever is passed in for `xyz` will be added to the router's `params` array as `_id`

Now it knows which template to load, and we know the id of data we want to stuff in there - now we need to pass the right data context to the template.

Add data context with:

use `this.params._id`

```js
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
})
```

Shorthand - `Posts.findOne(this.params._id)`
Longform  - `Posts.findOne({_id: this.params._id})`


## Session

* Control state outside of URL and database
* Relevant to current user only
* Global variables - central communication bus
* `Session` available anywhere on the client
* Add to UI through template helper and spacebars
* Not shared between users or even browser tabs!
* Refreshing the window will start a new session
* Won't re-run if set to same value
* Hot Code Reload (HCR) preserves session variables
  * Saves current session to local storage and then loads afterward
  * Helpful to temper automatic page reloads
    * Store User state
* Allows you to react imperatively to changing data

```js
// set session
Session.set('pageTitle', 'A different title');
// get session
Session.get('pageTitle');
```

### Auto Run

* Template helpers are automatically reactive
* Session is reactive
* But most other code is just plain old js
* To create a reactive context, use `Tracker.autorun`
  * Anytime reactive data sources inside of it change, it will be re-executed

```js
Tracker.autorun(function(){
  console.log('Value is: ' + Session.get('pageTitle'));
})
```

## Adding Users

Easy because of full stack packages

```bash
#meteor add accounts-ui
meteor add ian:accounts-ui-bootstrap-3
meteor add accounts-password
```

* Adds several things:
  * Database - accounts collection
  * Server - accounts business logic
  * Client - available templates
    * `{{> loginButtons}}`
    * `{{> loginButtons align="right"}}`

We can also control the package through a config file

```js
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
```

Special collection added to `Meteor.users`

```js
Meteor.users.findOne();
```

Accounts package auto-publishes details for current user - but the rest of the collection stays behind:

Try running the following in the browser and in the mongo shell

```js
db.Users.find().count();
```

Typical user document in database:

<!-- spellchecker: disable -->

```js
{
  "_id": "H5kKyxtbkLhmPgtqs",
  "createdAt": ISODate("2015-02-10T08:26:48.196Z"),
  "profile": {},
  "services": {
    "password": {
      "bcrypt": "$2a$10$yGPywo3/53IHsdffdwe766roZviT03YBGltJ0UG"
    },
    "resume": {
      "loginTokens": [{
        "when": ISODate("2015-02-10T08:26:48.203Z"),
        "hashedToken": "npxGH7Rmkuxcv098wzz+qR0/jHl0EAGWr0D9ZpOw="
      }]
    }
  },
  "username": "sacha"
}
```

Published user document:

```js
{
  _id: "H5kKyxtbkLhmPgtqs",
  username: "sacha"
}
```

<!-- spellchecker: enable -->

## Collections and Reactivity

**Imperative Way** using `.observe()` on a cursor

```js
Posts.find().observe({
  added: function(post) {},
  changed: function(post) {},
  removed: function(post) {}
  // grab post._id and search for in dom to make changes
});
```

Messy - but useful for third party widgets when updating them with real time data changes (Highcharts?!)

**Declarative** - define relationship between objects and let Meteor do the heavy lifting of keeping them in sync

> **Dependency Tracking in Meteor: Computations**

**Computation** - block of code that runs every time one of the reactive data sources on which it depends changes


```js
// only run once and wait until we've finished loading data
Meteor.startup(function(){
  // creates a computation and knows when to re-run
  Tracker.autorun(function() {
    // Posts.find() is reactive so it will automatically inform the computation of changes
    console.log('There are ' + Posts.find().count() + 'posts');
  })
});
```

## Creating Data on the client

Don't need action on form because we'll be trapping and handling on the client

Wire up by tapping into template `events`

```js
Template.postSubmit.events({
  'submit form': function(e) {
    // prevent browser from handling
    e.preventDefault();

    console.log(e.target);

    // create post
    var post = {
      url: e.target.url.value
      title: e.target.title.value
    };

    // capture returned post id
    post._id = Posts.insert(post);

    // navigate to new post on submit
    Router.go('postPage', post)
  }
});
```

## meteor remove insecure

the insecure package *allows* - as in, it's its job - the client to update the collection on the server.  Without insecure, we'll need one of two things:

1. Tell meteor when it's **OK** for the client to update the database
2. Update the Database from the server

Method 1 with allow / deny

```js
Posts.allow({
  insert: function(userId, doc) {
    //only allow post if if you are logged in
    return !!userId;
  }
});
```

## Route Hook

Route hook can intercept an action and check things before performing the action - like a bouncer

```js
// create require login function
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

// add login function to postSubmit route before action
Router.onBeforeAction(requireLogin, {only: 'postSubmit'})
```

Router hooks are reactive so when the state they depend on changes, they will update automatically

**Dealing with latency** - when rendering templates - meteor starts right away before it gets a chance to talk to the server.  In case there is a discrepancy, you'll get a flash of content problem.  To avoid this for user log on, we can check if the user is currently logging on and then display a loading template.

```js
if (Meteor.loggingIn()) {
  this.render(this.loadingTemplate);
} else {
  this.render('accessDenied');
}
```

We can still hide the link, but this prevents someone opening up the console and typing `Router.go('postSubmit');`

[accounts package](http://docs.meteor.com/#/full/accounts_api)

Javascript: `Meteor.user()`
Spacebars:  `{{currentUser}}`

Hide if not logged in:

```html
{{#if currentUser}}
  <!-- Hidden from users not logged on -->
{{/if}}
```

## Methods

We still want to:

* add accurate (server) timestamps
* add accurate (server) user data
* add accurate (server) id's to the collection

Methods provide better security *and* better separation of concerns

Meteor implements methods to call `insert`, `update`, and `remove` on collections.  On the client side it pushes a message, and on the server it changes the collection.

```js
Meteor.call('methodName', parameters, callback)
```

Callback always has two parameters: `error` and `result`

```js
// This calls the method and defines what to do when it gets back - we'll define the method itself later
// Do instead of Posts.insert(post);
Meteor.call('postInsert', post, function(error, result) {
  // check for error
  if (error) { return alert(error.reason); }
  //otherwise navigate to page
  Router.go('postPage', {_id: result._id})
})
```

### Checking Parameters

[`meteor add audit-argument-checks`](http://docs.meteor.com/#/full/auditargumentchecks)

```js
// check is user is logged in
check(Meteor.userId(), String);
// check object ahs title and url properties
check(myObject, {
  title: String,
  url: String
})
```

Meteor methods are executed on the server so it is assumed they are trustworthy.  Which means they bypass the Allow Deny Collection filters

If you need to run code before every `insert`, `update`, or `remove` call to a collection, then you can use [`collection-hooks`](https://github.com/matb33/meteor-collection-hooks)

## Collections

Sort Operator - pass in an object with sort property that consists of keys to sort by and a sign for ascending and descending

```js
// sort by 'submitted' descending
Posts.find({}, {sort: {submitted: -1}})

//Alternative syntax
var operator = {};
operator.sort = {
  submitted: -1
};
return Posts.find({}, operator);
```

## Latency Compensation

* Client makes change
* Simulates change on client - UI updated
* Send change to server
* Canonical change is made
* Change automatically pushed to client
* If change needs fixing - UI updated again


To test Latency Compensation, we can use

```js
Meteor._sleepForMs();
```

But only run it on the server (to do the actual test)

```js
if (Meteor.isServer) {
  postAttributes.title += " (server)";
  Meteor._sleepForMs(5000);
} else {
  postAttributes.title += " (client)";
}
```


### Delete

```js
Posts.remove(currentPostId);
```

### Edit

[`$set` operator](http://docs.mongodb.org/manual/reference/operator/update/set/) - updates specified fields while leaving others unchanged.

```js
Posts.update(currentPostId, {$set: postProperties}, function(error) {});
```

Only allow editing by author

```js
// provide info to template
Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  }
});
```

```html
<!-- Use in spacebars -->
{{#if ownPost}}
  <a href="{{pathFor 'postEdit'}}">Edit</a>
{{/if}}
```

[**Methods vs. Allow/Deny**](https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/)

* Using allow / deny on the client is straightforward for small changes
* Methods are more powerful and can better handle server side security and synchronization

### Methods are better when

* Heavy Database functions
* Data aggregation
* You want to know result via callback instead of eventual synchronization













## Underscore

`_.extend()` - extends one object with the properties of another

## Atmosphere Packages

[Publishing](https://atmospherejs.com/i/publishing)

[Writing Packages](http://docs.meteor.com/#/full/writingpackages)

[Package.js](http://docs.meteor.com/#/full/packagejs)

[Meteor Packages Tutorial](http://www.webtempest.com/meteor-js-packages-tutorial)

```js
Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("templating", "client")
  api.addFiles('nametag.html', 'client');
  api.addFiles('nametag.css', 'client');
});
```

```bash
# create package where *my* is meteor username
meteor create --package my:package
meteor create --package kylemit:nametag
# create symlink to add

# publish package
meteor publish --create
```


## Buzzwords

* **Database Everywhere** - Database runs on the server *and* the client
* **Data on the wire** - once the app is setup, the only thing that needs to get sent over HTTP is data to make app changes.  This makes the data size very lean
* **Latency Compensation** - Meteor will attempt to do what it thinks is the best result on the client.  This is the same 99% of the time.  But if someone tries to hack the client side code so it's inconsistent with the server side code, when the server does the canonical commit, when it gets back to the client, if it's different, the client will automatically update.
* **Distributed Data Protocol (DDP)** - Protocol for funneling data from server to client
  * [Realtime Conference by Matt DeBergalis](http://2012.realtimeconf.com/video/matt-debergalis)
  * [Subscriptions and DDP by Chris Mather](https://www.eventedmind.com/feed/meteor-subscriptions-and-ddp)
* Isomorphic API - Write once - run everywhere
* Isomorphic Packages - Packages deploy on server, client, html, css

## Meteor News

https://crater.io/
https://meteorhacks.com/
https://www.reddit.com/r/meteor

## Side Projects

[Meteor Any-DB](https://github.com/ccorcos/meteor-any-db)
[Fastosphere](http://fastosphere.meteor.com/)
[Underscore - Javascript helpers](http://underscorejs.org/)

## Angular / React

https://www.meteor.com/tutorials/angular/templates
http://tutorial-viewer.meteor.com/tutorial/1/angular
https://github.com/mstamos/microreact

## Meteor Toys

http://meteor.toys/
[How Meteor Toys Bring Back the Joy of Autopublish and Insecure](https://medium.com/@msavin/how-meteor-toys-bring-back-the-joy-of-autopublish-and-insecure-334f218f254c)
[Meteor Toys](http://carosi.nl/tech/2015/06/16/meteor-toys/)

## Articles

[Fat Models, Skinny Templates](http://joshowens.me/fat-models-skinny-templates/)
[ES6 Examples](https://medium.com/@dferber90/real-world-es6-examples-in-meteor-a834c6073daa)
[A Guide to Meteor Templates & Data Contexts](https://www.discovermeteor.com/blog/a-guide-to-meteor-templates-data-contexts/)

## Meteor Hacks

[Bulletproof Meteor](https://bulletproofmeteor.com/basics/what-is-performance/1)
[Sikka - Rate limiting](https://github.com/meteorhacks/sikka)
[Kadira - Performance Monitoring](https://kadira.io/)


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

## Links

* [A JavaScript Primer For Meteor](https://www.discovermeteor.com/blog/javascript-for-meteor/)
* [Discover Meteor](https://book.discovermeteor.com/)
  * [Discover Meteor Code](https://github.com/DiscoverMeteor/Microscope)
* [bulletproofmeteor](https://bulletproofmeteor.com/basics/introduction)
* [Stack Overflow Tag](http://stackoverflow.com/tags/meteor/info)
* [Meteor Tips](http://meteortips.com/)


## Tutorials

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


### Bootstrap Material Design

https://github.com/FezVrasta/bootstrap-material-design
http://fezvrasta.github.io/bootstrap-material-design/
http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html
https://atmospherejs.com/fezvrasta/bootstrap-material-design

### Accounts

#### Configure Google

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

#### JavaScript

```js
Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
});
```

#### Template

```hbs
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

[How to use jQuery in Meteor 1.0](http://stackoverflow.com/q/27116880/1366033)

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

### Resharper

Unexpected Tag Warning

#### Autocomplete

Autocomplete and syntax highlighting for templates
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

Add: `%LocalAppData%\GitHub\PortableGit_<sha>\bin\git.exe`

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

### Unexpected mongo exit code 100

### Message

```none
> => Started proxy.
Unexpected mongo exit code 100. Restarting.
Unexpected mongo exit code 100. Restarting.
Unexpected mongo exit code 100. Restarting.
Can't start Mongo server.
MongoDB had an unspecified uncaught exception.
This can be caused by MongoDB being unable to write to a local database.
Check that you have permissions to write to .meteor/local. MongoDB does
not support filesystems like NFS that do not allow file locking.
```


### Articles

* [Meteor: unexpected mongo exit code 100](http://stackoverflow.com/a/15610560/1366033)
* [Using the Remove-Item Cmdlet](https://technet.microsoft.com/en-us/library/ee176938.aspx)
* [Cmd](http://ss64.com/nt/del.html)

### Solution

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

> mongo: Meteor isn't running a local MongoDB server.
>
> This command only works while Meteor is running your application locally. Start your application first. (This error will also occur if you asked Meteor to use a different MongoDB server with $MONGO_URL when you ran your application.)
>
> If you're trying to connect to the database of an app you deployed with 'meteor deploy', specify your site's name with this command.

#### Your app is crashing

```none
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
```

#### Can't render headers after they are sent to the client


```none
At line:1 char:1
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
```

**Articles**:

* http://stackoverflow.com/a/7789131/1366033
* https://github.com/meteor/meteor/issues/2842
* https://github.com/crazytoad/meteor-collectionapi/issues/16

#### Running Meteor Deploy from Powershell

**Message**:

> meteor : To instantly deploy your app on a free testing server, just enter your email
At line:1 char:1

```none
+ meteor deploy Kyle-Todos.meteor.com
+
+
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (To instantly de...nter your email:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError

address!
Email:
```

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

### [Nuget Package Manager Shortcut](http://stackoverflow.com/q/18424466/1366033)

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
