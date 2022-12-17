---
title: Boston Code Camp 21
date: 2014-06-21
templateEngineOverride: md
---

https://www.bostoncodecamp.com/CC21/info

# ASP.NET MVC WebAPI in a Multi-Device World

\- by Jesse Liberty

* What is WebAPI?
  * Framework to build HTTP services
* WebAPI components
  * ASP.NET project
  * MVC or web app
  * WebAPI Project Template


# Angular.JS for .NET Developers

* Angular is hot and for good reasons
  * Two way data binding
  * Model-View-Whatever
  * Powerful, flexible, works and plays well with others

* What to look for in a Framework
  * Model - View - *
  * Data Binding
    * We'd rather have immediate updates
  * Testability
    * If you're not doing unit testing, and you feel guilty about it, you should be
  * Dependency Injection
    * Dependency management
    * Tell method - I need this kind of thing - have it provided when I ned it
  * Templates
    * Ability to control the view - make each object look like this
  * Routing
    * SPA - Single Page Applications
    * We'd like to build a single page an have it only have to go to the server to

* What do you look for?
  * View Composition
  * Animation
  * Pub/Sub (publishers and subscribers to events)
  * Patterns and Eco-system (emerging community)
  * Promises
    * Chaining
    * When this, do this
  * Extensibility

* John Papa Angular Learning Curve
  * Getting Started (80/20)
  * Steep climb for advanced topics
    * Change in mindset from jQuery
      * jQuery - find element - modify element
      * Angular - extending html (directives)
        * teaching html new tricks
        * declaratively tell html how to use data
  * Continued Learning

* Core Features
  * DataBinding
  * Routing
  * Directives

* Getting Angular
  * Nuget - VisualStudio
  * Bower - WebStorm
  * angularjs.org
  * GitHub
* Getting HotTowel (jump start program)
  * NuGet


* Code
  * Blank ASP.NET App
  * Add Angular Core in Nuget
  * Add blank HTML
  * Add Script

* Add `ng-app` directive (can also use `data-ng-app` if you want HTML5 compliance)
  * This tab, and everything below it, is part of angular

```html
<html xmlns="http://www.w3.org/1999/xhtml" ng-app>
```

* Add ng-model
  * creates a model
* Add brackets - angular will look for property in model and track if it changes


<!-- {% raw %} -->

```html
Message: {{message}} <br/>
<input type="text" ng-model="message"/>
```

<!-- {% endraw %} -->

* `ng-init` - Directive that exists **solely for demos**
  * Helps populate data

```html
<body ng-init="book=[
          {title: 'War and Peace', author: 'Tolstoy', price: 19.95},
          {title: 'Pro Windows 8.1', author: 'Liberty', price: 29.95}
        ]">
```

As long as books is in our model, we'll repeat over them


```html
<tr ng-repeat="book in books">
    <td>{{title}}</td>
    <td>{{author}}</td>
    <td>{{price}}</td>
</tr>
```


Filter repeat with Pipe (`|`) - what follows is a filter


```html
<tr ng-repeat="book in books | filter:'myFilter'">
```

Add currency

```html
<td>{{book.price | currency}}</td>
```


Zen Coding
http://vswebessentials.com/

```none
table>thead>tr>td*
```

Becomes this:

```html
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
        </tr>
    </thead>
</table>
```

## SPA

Index.html is going to serve as a shell, in which we will serve other views

Grab the top navbar from the app and layout folder and insert it into page

```html
<div ng-include = "'app/layout/topnav.html'"></div>
```

Add a route with `ng-view`.  Wrap in a second div for animations

```html
<div><div n-view></div></div>
```

We can name the app we're instantiating:
Look for a module named `app` (typically place in file called app.js)

```html
<html ng-app="app"
```

Side Waffle - helps create templates
Add new AngularJsModule

`angular.module`

* One parameter - getting the module
* Two parameters - setting the module
  * Setting dependencies

# Be a Git Ninja

http://slides.com/yogia/gitninja/live

* **DVCS** - Distributed Version Control System

GitHub - pull-request pattern

* what was committed
* what comments exist
* what changed

Continuous Integration

* Team City
* Octopus Deploy

[Linus talk on Git](https://www.youtube.com/watch?v=4XpnKHJAok8)

* Clones may take a little time because it downloads everything

How to Set Up on Windows

1. Get ConEmu/Cmder
2. Get TortoiseGit for SSH purposes
3. Get Putty
4. Get Git
5. Get PoshGit
6. Get Git Extensions
7. Use Cmder directly or use powershell

https://gist.github.com/dmangiarelli/1a0ae107aaa5c478c51e
https://bliker.github.io/cmder/
https://bitbucket.org/thedanner/powershell

Good Command Line:
https://bliker.github.io/cmder/


Good GUI
http://www.sourcetreeapp.com/

Get status of repository

```bash
git status
```

Include untracked file in staged changes

```bash
git add .
```

Commit to making changes

```bash
git commit -m "First Commit"
```

Push commits to master

```bash
git push origin master
```

discard changes

```bash
git reset --hard
```


If you try to push, and someone has already pushed, it will fail
Instead, you have to pull down changes, identify merges, and then push

Temporarily save your changes

```bash
git stash
```

Look at stashed changes

```bash
git stash list
```

Apply stashed changes

```bash
Git stash pop
```

Show what's happened

```bash
git reflog
```

Top most change

```none
HEAD
```

create an alias to cut down on common procedures

```bash
git config --global alias.lga3 "log --graph --oneline --all --decorate"
```

open up diff tool - GUI with file differences

```bash
git difftool
```

## Git Workflows

### Merge Vs. Rebase

![MergeVsRebase](http://blog.sourcetreeapp.com/files/2012/08/mergerebase.png)

* Merge -
* Rebase -

Tag commits and then can refer to the commit by the tag name instead of the sha

#### Gitflow

![Gitflow](http://nvie.com/img/2009/12/Screen-shot-2009-12-24-at-11.32.03.png)

```none
                                  Hotfix
                                  /     \
Master Branch (always prod copy) -------------------------------Deploy
                                                                 /
                                                    Release---Close
                                                    /            \
Developer (always developer copy) ---------------R1------------Add to Dev
  \                                             /
   feature/feature1 (developer works on feature)
```

#### Pull Requests

https://www.atlassian.com/git/workflows#!pull-request
http://scottchacon.com/2011/08/31/github-flow.html

![pull request](https://www.atlassian.com/git/workflows/pageSections/00/contentFullWidth/0/tabs/04/pageSections/0/contentFullWidth/0/content_files/file0/document/pull-request-overview.png)


Forking and Pull Requests are GitHub specific

```none
Repo ----------------------Pull
         \                  | (pull Request)
        Fork ---C1---C2----C3
```

Ready to submit pull request
Go back to master origin
Rebase your master
Push changes to your feature branch
Make sure they sync up
Submit pull request from feature branch


# Unit Tests with Jasmine

```js
function greet() {
  return "Hello.";
}
// unit test
describe ('greet()', function() {
  it('returns "hello."', function () {
    var expectedReturn = "Hello.";
    var actualReturn = greet();
    expect(actualReturn).toBe(expectedReturn);
  });
});
```

Jasmine includes mostly javascript to run the tests and some css to style them

Speaker Blog
http://www.fascinatedwithsoftware.com/blog/

Jasmine Project
http://jasmine.github.io/

Have test page in production code base
Browse test by go to test page and open up - it will run the tests

Jasmine falls into two categories
Test Driven Development
Behavior Driven Development

jasmine
`expect()` - takes a parameter - returns 'an expectation
`.toBe` - single most important evaluator
`.not` - reverse evaluator on expectation
`expect(x).not.toBe(y)`


```js
expect(sim.create()).toThrow() // will not work because expect parameter is evaluated prior to be passed into the expect function
expect(function() {sim.create()}).toThrow()
```

`describe()` - function to help setup test - can nest so one describe calls multiple describes

`beforeEach()` - run before each test
`afterEach()` -

Angular - unit testing directive (html tag) - start test by adding tag, and end test by removing it

`spyOn` - like a mock

```js
healer = sim.create(0,0);
// when I'm testing getReputation (complicated function)
// I don't want any random things being created
spyOn(healer, 'getReputation').andReturn(0);
```

Unit tests don't do well with Random things - you can call `spyOn` on `Math.Random` i.e. doesn't have to only be your code.

```js
var removeSpy = function(spy) {
  spy.baseObj[spy.methodName] = spy.originalValue;
};
var spy = spyOn(Math, 'random').andCallFake(function() {
  return arrayOfRandoms[ixRandom]
});
// can only have a spy one one thing
// can't spy on the same thing twice
// jasmine tears down all your spys after each test.
removeSpy(spy);
```

Jasmine stores `originalValue` before spied on and `methodName` that is being spied on.
`spyOn` returns a value - you normally don't need it, but if you want to edit it later, you'll have to.

# vNext

Outline of Volunteer Opportunities

Were you at Jesse Liberty's talk? - Angular.js

* The Organizing Group
  * Currently 4 of them
* Publicity
  * Improvements needed
* Sponsor Recruiting
  * Improvements needed
* Ongoing Site Maintenance
  * BCC.com
    * Speaker emails are automated
    * Scheduling automated
    * jQuery Mobile Added
  * EventBrite
    * Registration
      * Clone last year's settings
  * MailChimp
    * Mailing to past attendees
* Communication
  * Sponsors
  * Speakers
  * Attendees
* The Website

SPAs - don't get trolled by search engines.
Xamarin App - for devices

[Beyond Compare](http://www.scootersoftware.com/)

John Papa - Code Camper

**New Feature**: Voting on presentations - ready by late September
**Fall Camp Date**: Nov. 22nd - proposals close 3 weeks prior


New Ideas:
Info about speakers
linked in link
github link
level of presentation - 100/200/300 level

* sponsors recruiting:
* talk to colleges
  * attendees
  * presenters
* let people table
* hack session

40 minutes sessions - back to back sections allowed
Networking at lunch
Networking after
