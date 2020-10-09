---
title: VT Code Camp 6
date: 2014-09-20
---


https://2014.vtcodecamp.org/

## Modern Web Diagnostics with a Glimpse into ASP.NET 
### Anthony van der Hoorn


----

## Better Code, Better Debugging
### Kathleen Dollard

**Debugging**:  the process of investigating bad 

Badness of a Bug
Dev Time - Let's address this
Cost to Org

#### Defensive Coding

* Testing
* Contracts/guards
* Readable code
* Coherent tiers
* SOLID principles
* Service isolation

#### Visual Studio Debugging

#### Production Debugging

* Learn OS gives for free
* Some aibility with PerfView or other tools
* Logging / ETW / SLAB
	* Difficult to run in production (performance issues on single thread)
* Fearless dumps
* Practice
* *Performance problems are bugs*

Testing - needs to be automated - only way we can sneak in more


#### Bug Difficulty

* **Easy** -  Technique doesn't matter
* **Medium** - Technique important
* **Hard** - all hands on deck.  expensive.


### Scientific Method

* Question
	* Question submitted by user
	* Reproduce it / Understand it
	* Create a broken test
		* Weed B Gone
* Hypothesis
	* Quickly think of 6-15 things that might be wrong
		* Collaboration - same piece of paper
		* Multi-Threaded - different rooms
	* Confirmation Bias - hear what you already believe
* Predictions
	* Pick some hypothesis and develop them
		* If this then that
			* Focus on excluding projections
* Evaluate
	* Pick one prediction to evaluate
	* Easy / High value predictions
	* Try to prove hypotheses wrong
		* Very easy to disprove - hard to prove
		* Reduces blinders
	* Tools
		* Unit Tests
		* Visual Studio
		* Remote Debugging
		* Logs
* Analysis
	* Do you have a fix?
* PLUS Publication
	* Fix
	* New Tests
	* Regression Tests
	* Learn and Record
		* Team Wiki



PerfView - see exceptions

SLAB is the on ramp for EventSource
EventSource is freeway to ETW
ETW is the zone for production debugging

Tweet From this Room

WintellectNOW trial
PromoCode: Dollard14


------

### Clean Code: Write Clean Think Clean
##### Hetal Dave

Agenda:

* What is clean code
* Why do we need it
* How we can do it

Platform / Language agnostic

Descriptive Variable Names


-----


## Angular JS in Practice
### Jon Hoguet

What to Excpect

* Our Architecture
* Angular
	* Controller
	* Directive
	* $compile
	* Directives and isolate scope
* Build
	* Grunt
	* Testing with Karma / Protractor
* Debugging
	* $log
	* in the browser

#### Our Architecture

* Angular
	* Module
		* Template
			* HTML

Minimal Grails Dependency

##### Lessons Learned

* **Do** organize around functionality
* **Build** First
	* Figure out how your deploying
* **Don't** mix templating languges

#### Controllers vs. Directives

* A controller is an abstraction of a directive

```
<div ng-controller="MyController"></div>
```

Loop through vehicles - search for images
```
<div ng-repeat="vehicle in vehicles">
	<!-- I want to add image management - use controller? -->
	<div ng-controller="vehicleImageController"></div>
	<!-- problem - nothing declaratively tells controller about vehicle -->
</div>
```

If controller abstraction of directive isn't working, usse a directive

```
<div ng-repeat="vehicle in vehicles">
	<!-- Use directive that takes vehicle -->
	<div image-manager-for="vehicle"></div>
</div>
```

#### `$compile`

BBF for production apps

```
$compile (markup / directives) (scope) = live dom fragment
```



1. Complie is the most important thing anuglar does
	* Angular binds model state binding and translates to DOM
    * Everything else is bells and whistles
2. composable
	* will deliver live DOM element, even one that is not yet inserted into DOM
3. makes testing easy
	* Ask testing to compile element
4. makes experimentation easy

Access to Version control container

```
var ioc = angular.element('[ng-app]').injector(),
    $rootScope = ioc.get('$rootScope'),
    $compile = ioc.get('$compile');

var scope = $rootScope....

var makup = "<div>{{property}}</div>"

var el = compile ( scope + markup)

//el now operates live with two way data binding
```


#### Directives Refresher


* **=** - <del>for two way</del> uses `$parse` and `$watch`
* **@** - <del>for one way</del> uses  `$interpolate` and `$watch`
* **&** - for functions - uses `$parse` wrapped in function
 

Templates
$template cache will check if item is in cache, in scope, or do a $http request if it can't find it there.

Cut down on $http requests by using grunt to build templates into templates.js

Angular: needn't deal with order - it will only run when DOM is loaded.
Config phase: have to deal with order


##### Testing

* Karma
* Protractor (end to end testing for AngularJS)

Old Thinking: Testing DOM is hard an expensive.  Abstract everything away
Angular Tools: Testing DOM is easier with `$compile$


#### Logging

At least give me a log

#### Debugging

```
angular.element($0).scope()
.lifecycle()
.$parent()
```
