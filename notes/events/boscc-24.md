---
title: Boston Code Camp 24
date: 2015-11-21
---

https://www.bostoncodecamp.com/CC22/info

### [ASP.NET goes cross platform](https://www.bostoncodecamp.com/CC24/Sessions/Details/15252)


**ASP.NET 5.0**

* Complete re-write of system.web.dll
* Still inherits from controllers (single pipeline for web api and views
* .NET Open Source
	* coreclr
	* corefx
	* roslyn

[Visual Studio Code](https://code.visualstudio.com/Download)

[OmniSharp](http://www.omnisharp.net/) - pick any editor - still have visual studio server running in the background.

New Project

* wwwroot - locked - just for serving static files
* controllers
* models
* viewmodels
* services

* Scaffolds out with:
	* bower.json
		* client side libraries - angular (nuget for client side packages)
	* gulpfile.js
		* client side build process
			* server side is done with msbuild
		* builds, compiles, minifies javascript file
	* package.json
		* nuget (server side libraries) - c# libs
	* project.json
		* replaces .csproj file
			* much lighter weight
			* works on other devices
			* add project dependencies
				* automatically loaded
	* msbuild -> dnx|dsu
		* build to **dnxCore50** -> cross platform
			* core doesn't have entire framework (yet).  So can't build entire framework if we want to push to a mac.  So remove *dnxBuild451*

# div.col-md-12 - why do?

[Visual Studio Online](https://www.visualstudio.com/products/visual-studio-team-services-vs) - Free Private Repositories


* `DNVM` - Dot Net Version Manager
	* version manager for command line
* `DNX` - Dot Net Execution (Environment)
	* lean .NET stack for building modern web apps
	* hosts the CLR
	* [get.asp.net](https://get.asp.net/)
* `DNU` - Dot Net Utilities


```bash
dnvm list
dnvm use mono
dnvm use default
dnu restore
dnu build
dnx web #start web server
dnx
```

create project on a mac (w/o Visual Studio)

[Yeoman](http://yeoman.io/) - scaffolds projects (any time of projects via generators)

* asp.net, meteor

https://github.com/omnisharp/generator-aspnet#readme

**Dependencies**:
**Node.js:** brew install node for Mac OS X, choco install nodejs for Windows OS
**Yeoman**: `npm install -g yo`
**Install**: `npm install -g generator-aspnet`
**Run**: `yo aspnet`


```bash
npm install -g yo
yo aspnet
```

Anyway to do that without the command line in Visual Studio Code?

[Kestrel](https://github.com/aspnet/KestrelHttpServer)


github.com/aspnet
github.com/aspnet/home/wiki/roadmap
dotnet.github.io

docs.asp.net
get.asp.net

channel9.msdn.com
mva.microsoft.com

aka.ms/jsch9
aka.ms/vsacejump

@aspenwilder


### [System Testing an API with NodeJS and Mocha](https://www.bostoncodecamp.com/CC24/Sessions/Details/15261)


by [Daniel Botswick](http://danielbostwick.com/)

https://speakerdeck.com/bostwick/system-testing-an-api-with-nodejs-and-mocha

[NodeJS](https://nodejs.org/en/)
[MochaJS](https://mochajs.org/)

If you don't know how to implement something to start, following TDD will not help you figure it out.

**Why** do testing?

* if *you* aren't testing, your *users* are.

> Trust, but verify
> - Ronald Regean

> "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization."
> Gerald Weinberg 
> https://en.wikiquote.org/wiki/Programming

**What** to test?

* Test behavior, not structure of code
* Behavior: the way in which a system acts in response to a particular situation or input

Job Story (template or sentence to prompt input)

```none
When ____
I Want to _____
So that _____
```

Divergent from user stories - very behavior driven - not persona driven


All tests look at the behavior of a system.  But the system under test (SUT) changes - and that's how we categories tests

Test Categories:

* Unit Tests - individual functions
* System Tests - features
* Integration Tests - making sure it works with 3rd party interfaces

xUnit (*Unit) test frameworks

* jsUnit
* jUnit

Naming things is hard

most xUnit style framworks have long names:

> testSayHello_givenName_returnsHelloName

BDD - Behavior Driven Testing

http://dannorth.net/introducing-bdd/

* Don't want to write really long names for BDD tests to define behavior

rspec for ruby popularized simpler style

```ruby
define("sayHello", function() {
	define("given number", function() {
	});
});
```

"Test names should be executable documentation"

* Building your own API
* Integration Testing 3rd party API

scheme in C's clothing

**Tools**:

* NodeJS
* Mocha
	* Chai (companinon library)
* request
* bluebird promises


**Directory Structure**:

bin/
config/
src/ or lib/
	project-name/
test/
readme.md
package.json


Run the tests - straight from package.json

Demo: Simple, but not trivial
https://github.com/climbhigher/climbhigher-api


System Tests - client of the API - don't call into the code - call into the app server with an HTTP request


mocha - setup and teardown

```js
describe()
before()
after()
require()
```
