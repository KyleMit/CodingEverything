---
title: BTV WAG - Front End Framework Face-Off
date: 2014-02-12
---

[BTVWAG x BurlingtonJS: Front-end Framework Face-off](http://www.meetup.com/VTCode/events/162314252/)

* [Ember](http://emberjs.com/) - Peter Brown of Agilion
* [Angular](http://angularjs.org/) - Rob Friesel of Dealer.com
* [Backbone](http://backbonejs.org/) (+ Marionette) - Alan Peabody of Agilion
* No framework - Ian Metcalf of Draker


### Backbone.Marionette

Built on Backbone.js

* Models (and collections)
* View (and Template)
* Router
* 6.4kb minified

Backbone is event based

* Models trigger events
* DOM interactions trigger Events

Built on Underscore library

Backbone doesn't do a lot for you

* Un-opinionated
* Render a lot of your own code
* Handle switching between views
* Handle view clean up
* Handle event binding AND unbinding


[Marionette](https://marionettejs.com/)

* Views & View Managers

Marionette.View

* Base View inherits from backbone view
* Adds best practices for:
  * Templating
  * Rendering
  * Event binding & unbinding

ItemView

* Specific Views
* Renders One Model

Item Views remind me a lot of ASP.NET controls

CompositeView

* Renders a collection with:
  * A wrapper template
  * An ItemView for each model

Layout

* View inside a View
* A template a view and a RegionManager

Application

* Top level object
* Includes Event Aggregator
* Includes Request/Response
* Includes Region Manager
* Responsible for starting App

Marionette Advantages

* Explicit, Simple
* Focused on OO concepts
* Manual binding of data and events


### Angular.js

* Toolset for building web *applications*
* Lethally allergic to global variables
  * Global namespace is like a public toilet - go in there if you have to, but don't touch anything

Features

* Declarative data-binding
* Client side controller
* Separation of concerns
  * Built in module system (similar to Require)
* Directives
  * Extensions for HTML

Opinionated in the Middle

* Model - write what you want (JSON)
* View - write standard HTML
* Controller - Opinionated
  * Directives
  * Controllers

Allergic to Global State

* View can only talk to things that are in the scope
* Makes for hygienic applications
* Eliminates common pitfalls

Hands off the DOM

* Controller code shouldn't touch the DOM
* Just use JavaScript to edit model
* JQuery is available, but doesn't yet worry about animations

Directives

* Extend HTML Vocabulary
* Now you can use the DOM
* Create new elements and widgets

```js
angular.module('books').directive('grRating', [
    function() {
        return {
            replace: true,
            restrict: 'AC',
            templateURL:
        }
    }
]);
```

Controller and modules

* Just write HTML
  * Good toolsets exist
    * Linters/IDES
* Model <--> Controller <--> Scope <--> View

Services

* Reusable code across controllers / directives
* Mock code for tests

Filters

* Format string that is being presented
* book.finished | date: 'MM d, y'

```js
angular.module('books').filter('dropSubTitle', [
    function() {
        return
    }
]);
```

Apply & Digest Cycle

* Slippery Scope
* Happens on rotation

`OnClick='GetFoo()'` !== `ng-click='GetFoo()'`

Organize your code

* web-app/
  * js/
    * ng-app-base.j
    * controllers/
    * directives/
    * filters/
    * services/

Careful passing minified scope

Angular scope - `$` prefix
Angular private - `$$` Prefix


### No Framework

https://github.com/substack/node-browserify
http://browserify.org/

* JavaScript is moving so quick
* API's are expensive to learn
* As soon as an API is popular, it gets locked into it's current feature set because users expect low variability

Don't try to solve problems before they arise
 --> But aren't there some common themes of web development

### Ember.js

Problems with Web Dev

* Client side development is challenging
* Expectations about how websites should work
  * Links should be portable
  * Back button should work
* Single Page applications are always that
  * Has multiple pages - just load on client side
* Lack of conventions

* Complexity --> Capability --> Complexity

* Write less code

Router

* Map URL to page
* Responsible for loading data, displaying templates and setting up application state
* Nested Routes

Controller

* Acts as a proxy to the model and handles events from the template
* Not like a Rails or ASP.NET controller (which is a router)

Template

* Handlebars = HTML + embedded expressions
* PostRoute "glues" controller and template
* Automatically bound to controller's state

Model

* Provides access to datastore
* Defines Schema and relationships
* Ember Data Adapter

View

* When you need more control
* Used less frequently
* Always associated with a controller
* Has access to whatever controller your template has access to

Component

* Similar to Angular Directives
* Custom HTML Element
* Like views without controller
  * Pass in any data you need
* Reusable

Data and Event Relationships

* Model
  * Controller
  * View
  * Template

#### Advantages

Architecture

* Supports application growth via:
  * Organization
  * Eliminating boilerplate
  * Sensible conventions
* Encapsulation
  * Loose coupling between components

Application Speed

* 100% of HTML rendered is in browser
* Server is responsible for data via API requests
* Decouples server's responsibility to send data and clients responsibility to display data

Object Model

* Computed properties
  * With and without aggregate data
* Observers
* Binding
  * Two way default, one-way for performance

Master Detail Interface

* Master is list of objects
* Detail pulls up relevant info

Friendly Documentation

Rails Influence

* Convention over configuration
  * Naming conventions (code + files)
  * If it feels painful, you're doing it wrong
  * It's not like nobody has ever built an ember application before
* REST architecture

#### Disadvantages

Learning Curve

Sprinkles of Javascript

* Build whole app or nothing at all

Handlebars can be slow

* Source gets junked up when you insert strings

Ember Data still in Beta

Ember Inspector

* NBS news is an Ember Site
* Install in chrome and see how it works

Ember Sandbox

*Build an Ember application in your browser

#### Coming Soon

* Ember Conf Next Month
* Ember Data 1.0
* Build Tools
  * Modules as first class citizens (ES6 Modules)
  * Built in Bower Support
  * CLI Commands
* HTMLBars
  * Replacement for handlebars
  * Performance Gains
  * Faster Rendering (comparable to React)
  * Will build DOM instead of Strings



### Notes

Sublime as IDE
http://todomvc.com/
http://www.thesoftwaresimpleton.com/blog/2013/03/23/client-side-mvc/
http://bower.io/
http://oboejs.com/




