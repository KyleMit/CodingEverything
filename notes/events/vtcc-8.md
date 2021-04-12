---
title: VT Code Camp 8
date: 2016-09-17
---

https://2016.vtcodecamp.org/


## [.NET All the Things](http://vtcodecamp.org/2016/sessions#web-application-security-basics)

[Bill Wagner (Senior Content Developer @ Microsoft)](http://vtcodecamp.org/2016/speakers#bill-wagner)

https://github.com/dotnet/core
https://www.microsoft.com/net/core#macos
https://docs.asp.net/en/latest/tutorials/your-first-mac-aspnet.html

Monoliths -> Containers

* **.NET Framework** - Platform for .NET apps on Windows
* **.NET Core** - X-platform and open source framework
  * deploy framework along with applications
  * native comp
  * Tools
    * Visual Studio 2015
    * Visual Studio Code - x-platform atom based editor
    * extensions for Sublime
* **Xamarin** - X-platform runtime for iOS, OS X, and Android

Can re-use .NET Core everywhere
UI/Platform specific libraries still context specific

### .NET Core

New set of command line tools
Different implementations of network stack across OS types - (i.e. OS specific calls)

### ASP.NET Core

Built on top of .NET Core
Combines all asp.net functions

### Demo

```bash
# what's here
ls
pwd
# make folder
mkdir cli
cd cli
# create new .NET project
dotnet new
ls
# project.json
cat project.json
# version, buildOptions/debugType, dependencies, frameworks, platform style (don't ship)
cat program.cs
# nuget restore
dotnet restore
# build / run
dotnet run
# what did it build?
cd /bin/debug
ls
# .dll, .pdb, (we didn't get an executable - we needed dotnet run to kick off)
# publish (for current platform)
dotnet publish
```


* .csproj -> project.json
* simpler, less sophisticated (for now) grammar

* **docker** images - build on top of each other (like .NET Classes)
  * want base image with entire framework
  * smaller deltas for just applications

.NET Core Runtime Identifier Catalog -> magic strings in `project.json`

[**Yeoman**](https://yeoman.io/) - template generator

ASP.NET - everything on by default
ASP.NET core - everything off by default

i.e. static files will get delivered

```bash
yo aspnet
```

ASP.NET core is just a console app that spins up a web server

```cs
public void ConfigureServices(

var host = new WebHostBuilder()
    .UseConfiguration
    .UseIIS

app.UseStaticFiles
app.UseSqlLite

app.run(async (context) =>
{
  // doesn't do anything (but it's super secure)
  await context.response.return("Hello World");
});
```

sql on a mac -> SqlLite (x-platform)


Empty web app -> bower, jQuery, Bootstrap

Web API, no longer built on top of MVC (don't need to pull in Razor Engine)


.NET Foundation - manages projects that are part of .NET

* .NET complier platform (Roslyn
* Examples
  * MVC
  * ASP.NET Core
  * Mono
  * Nuget
  * Xamarin
  * SignalR
  * Entity Framework
  * WCF
  * MS Build
* Advantages
  * Protection
  * Practices
  * Visibility
  * Support
    * CLA - Contributor Licence Agreement - for any Open Source Projects



## [Docker Containers](http://vtcodecamp.org/2016/sessions#docker-and-microsoft-asp-dot-net)

[Chuck Megivern](http://vtcodecamp.org/2016/speakers#chuck-megivern)

https://www.docker.com/
https://docs.asp.net/en/latest/fundamentals/servers.html

* What they are
* Trends
* Example
  * Company bought Solr search engine
  * Here are all the steps to install....
  * Why not just run a container
  * `$ docker run --name my-solr -d -p 8983:8983 -t solr
* Containerized MS

### Traditional environments configuration points

* Physical Server
* Operating System
* Security Patches
* Application Server
* Application


### Web Server documentation

* IIS
* IVM WebSphere
* Open Source / Red Hat
* JBoss


### Deployment

Examples

* **VMWare** - we can "image" a machine and run it anywhere
* **containers** - build entire OS inside container - run it anywhere


Containers are made from images - which are complete file systems

Built layer upon layer
immutable once built

* **Image** = complete file system. immutable
* **Container** = started from an image. it's running and has PID's and networks inside
  * All containers start the same way
  * what goes inside = configured framework + app
  * like a "microservice"
  * [Kestrel](https://docs.asp.net/en/latest/fundamentals/servers.html) server by Microsoft - instead of Windows Server and IIS
* **Registry** = (i.e. Docker hub) images can be published to (pushed) or pulled from.  Used to share images across servers


Naming - Making shipping docks the same exact size and shape no matter what their contents makes it super easy to move around

![Shipping Docker](https://i.imgur.com/mombVr2.jpg)

```bash
docker build # builds the image
docker push  # puts it in the registry
docker run   # runs it on a server
```

A YAML file describes containers and how they interconnect


## [Common Language Runtime (CLR)](http://vtcodecamp.org/2016/sessions#embracing-the-common-in-common-language-runtime)

[Paul Blasucci](https://twitter.com/pblasucci)


https://msdn.microsoft.com/en-us/library/system.threading.tasks.task

### Overview

* High Level Guidelines
* Common Vocabulary
* Language Selection
* Supporting F# and other languages

### High Level Guidelines

* Test *all* supported languages
* Provide examples in *all* languages
* Codify extensions methods *properly*


In order to share extension methods, add extension attribute to assembly, module, function

Common Idioms vs Language Features


### Avoid

* Nulls or Nullables
* Raising Exceptions
* Exposing Expression Trees
* Tuples


### Use

* Stateless Interfaces
* Expressive Types
* Task-based concurrency (TPL)
  * https://msdn.microsoft.com/en-us/library/system.threading.tasks.task
* Simple Generic Constraints
* LInQ Provider

Don't throw exceptions for null strings on object - that's not an "exceptional" state - that's a business state

### Language Selection

Use the language who features and predominant paradigm are the best fit for your problem domain

Don't just always use your favorite hammer

C# - Procedural
VB - Dynamic
F# - Functional


### Supporting `F#`

Avoid implicit type conversion
Avoid **subroutines** - doesn't return value (poke & inspect elsewhere)
prefer **methods** - returns value
prefer **pure functions** - all state is passed in

Leave class inheritance to the CLR and BCL

* Prefer immutable types
  * Supplement with "builder" types
  * ex. System.String is immutable / System.StringBuilder is mutable

### Supporting C# and VB (from F#)

* Do *NOT* expose `Async<T>`
* Emulate pattern matching with (higher-order) functions
  * Take in or return delegates as part of input/output
* Package extension methods into dedicated, static classes
* Prefer Base Class Library (BCL) collection types to Framework Class Library (FCL) types

Better API -> Wider Audience (Money || Fame)


Pattern matching with higher order function

```vb
result.Match(
  onSuccess := sub(v) v.DoStuff,
  onFailure := sub(v) v.DoOtherStuff
)
```


## [Debugging JavaScript](http://vtcodecamp.org/2016/sessions#death-defying-feats-of-debuggery)

[John Need](http://vtcodecamp.org/2016/speakers#john-need)


[First Computer Bug](http://americanhistory.si.edu/collections/search/object/nmah_334663)

Constitution Avenue, NW
Between 12th and 14th Streets
Washington, D.C.

ted talk - bugs of yore

```js
debugger;
```

Right click - blackbox script

![Blackbox](https://i.imgur.com/IEuZ1P6.png)

![Blackboxed](https://i.imgur.com/1PsYTdZ.png)

Step over jQuery internals

`console.error` -> includes stack trace
`console.error/warn` -> formatting

javascript operators:

* comma - i.e. var a,b - execute multiple statements, return the last value

* conditional breakpoint with comma condition that always eventually returns false

insert traces (console.logs or change values)

```js
// mock data
info = 5, false
// inspect data
console.log(info),false
console.trace(info),false
// assert data
console.assert(rand < .2 {message: "too small", "rand",:rand),false
```

![Conditional Trace Breakpoint](https://i.imgur.com/oodGd0r.png)

Doesn't rely on using console.log in your code (`console` might not exist)

Library of asserts

## [SQL Server Data Tools](http://vtcodecamp.org/2016/sessions#managing-databases-in-visual-studio-with-sql-server-data-tools)

[Bob Crowley](http://vtcodecamp.org/2016/speakers#bob-crowley)


https://www.mssqltips.com/sqlservertip/2804/introduction-to-sql-server-data-tools/

### SQL Server Data Tools

* create and manage databases in familiar VS Project
* Designer and T-SQL options
* facilitates source control
* tools for deployment
* unit testing

### Topics

* create database
* create database objects
* color code
* debugging
* database references
* deployment
* data compare
* unit tests

Create SQL Local DB (installs with Visual Studio)

Comes with Command Line Utility/Interface (CLI) called `sqllocaldb`

```cmd
# version 13 - > SSMS 2012
# -s means start
sqllocaldb create VTCC "13.0" -s
```

SQL Object Explorer -> Look for local objects


Create Project > SQL Server Type

If I don't author, but I do consume, tools to inspect SP -> go to definition

/VTCC
  /scripts
  /procedures
  /tables


* clr stored procedure
  * register assemblies in C#/.NET
  * expose as functions
  * call-able from other areas as native functions

Publish project -> generates change script (1st time, a bunch of creates)

PreDeployment Script / PostDeployment Script (specify with build action)
set_ansi_warnings = Off|On


Add unit tests

```sql
DECLARE
SELECT
EXECUTE
SELECT
```

Test Conditions:

* Scalar values
* Row Count
* Expected Schema
* Checksum
* ExecutionTime
* Not Empty Result Set
* Inconclusive

## [Socratic UX](http://vtcodecamp.org/2016/sessions#socratic-ux)

[Amy Chess](http://vtcodecamp.org/2016/speakers#amy-chess)

### Agenda

* How to structure your interview
* Avoid leading and loaded questions
  * "I think we would all agree that leading and loaded questions are bad"
* Build up context and qualifiers
* Pay attention to the "margins" of your product

### Contextual Inquiry

* broad scope
* user lead
  * *NOT* - talk about whatever you want
  * Starts with skeleton of conversation
    * General -> specific

### Leading Questions

* ex. Take the survey and tell us how "highly satisfied" you are!

Leading questions exist on continuum (not boolean)

### Loaded Questions

Assume something about end user

* ex. Do you have to transition between your products often?
  * Assumes:
    * They have to transition at all
    * interview and participant agree on what "often" means
* Decompose & Rewrite -> "Do you have to transition between your products?  How frequently do you have to do this?"


* Questions asked by engineering:
  * Is the login path clear?
* Questions asked by UX:
  * What was your experience of logging back into your new account for the first time?
  * How did you go about logging in?
  * Did you go to the [homepage] and click Login or did you bookmark the page?
  * Where do you expect to land after logging in?
  * How did this expectation algin with what actually happened?
  * Were you left with any lingering questions after signing up?

Clear -> expectations align with reality

Think about what goal is being addressed by set of questions


#### Don't put the onus on your users to fix your product

* What features would you like to see in this product?
* What makes for a great user experience on this website?

Instead -> talk about what users do outside your product (unmet needs)


#### Resources

* [A more beautiful question - Warren Berger](https://www.amazon.com/dp/B00GC53AG8/)
  * ![A more beautiful question](https://i.imgur.com/058wuPD.jpg)
* [Ignorance: how it drives science - Stuart Firestein](https://www.amazon.com/dp/0199828075)
* ![Ignorance](https://i.imgur.com/d3jhaTf.jpg)
* [Questionnaire Design for Social Surveys - Coursera](https://www.coursera.org/learn/questionnaire-design)


## [From Mobile First to Offline First](http://vtcodecamp.org/2016/sessions#from-mobile-first-to-offline-first)

[Bradley Holt](http://vtcodecamp.org/2016/speakers#bradley-holt)

Session timeouts / Internet Unavailable / Server Unavailable

Mobile First - Embrace, rather than fight lack of control of screen size

Web Browsers are **Thin Clients** - we don't trust them as app platforms

But we trust computers that allow browser access (think Single Sign On across devices)

Ubiquitous connectivity? - Scenarios to consider

* Airplane Mode
* Developing Countries - Enter in the field, sync at home
* Urban Canyons
* Data Caps
* Local Dev -  test poor latency
* Lie-Fi - Can connect to WiFi, but it can't connect to Network
  * weakest hop breaks chain -> can't rely on device status)


### [Eight fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)

1. The network is reliable.
2. Latency is zero.
3. Bandwidth is infinite.
4. The network is secure.
5. Topology doesn't change.
6. There is one administrator.
7. Transport cost is zero.
8. The network is homogeneous.


#### Two Approaches

1. Graceful Degradation
2. Progressive Enhancement (Offline First)

Lack of connectivity is not an error condition

#### Progressive Web Apps

* Discoverability of regular web app
* Gain native app like capabilities (as you use it more)
  * Notifications in Browser
  * Home Screen Shortcuts


Native apps aren't going anywhere
Open web isn't going anywhere either


Offline first technologies in use today:

### Content

HTML5 - App Cache

**Service Worker** - renders content

* fetch event
* *Hijack requests*
* event.respondsWith() returns content

### Database

Browser-based Database

* Standards (implemented differently)
  * indexedDB
  * webSQL
  * localStorage
* [LocalForage](https://github.com/localForage/localForage) - wrapper for specific technologies
  * lightweight
* [PouchDB](https://pouchdb.com/)
  * Javascript database - (runs in browser/node)
  * anything that implements CouchDB replication protocol
  * less light weight
  * updates happen locally (fast); syncs
* IBM - Cloudant Sync
  * iOS & Android

Electron - Atom shell
Raspberry Pi - IoT Internet of Things
Ionic


### Framework

[Hoodie](http://hood.ie/)


### Challenges

* One database per user
  * Scalability - Requires the database not to be a heavy thing (pouchDb)
  * Data must be segmented across users
  * [Cloudant Envoy](https://github.com/cloudant-labs/envoy) - a couchDB proxy to enable replication of database subsets


Examples - Web Apps, Desktop Apps, Mobile Apps, iOT

* Cloudant FoodTracker - built in iOS Swift
  * based on Apple FoodTracker - offline only
* Field Work -
  * Stores Geo-JSON
  * Ge Read-only base map layers
  * Esri ArcGis
  * GPS Still works if you don't have internet
* IoT -
  * Current - [MQTT](https://mqtt.org/) - will retry, *but* requires intermittent activity


[Couldn't adjust my air conditioning today because my thermostat was offline. The future is amazing!](https://twitter.com/adamdriscoll/status/737443560463556608)

[Building the Offline First Community](https://medium.com/offline-camp/building-the-offline-first-community-f496b86cc589#.vhdz3xkuz)

Low-bandwidth UX Design Patterns

Decentralized Web & Peer to Peer Technologies

[Security in offline first apps  - Calvin Metcalf](https://medium.com/offline-camp/offline-first-security-59bf4800e82a#.a6uz01et2)

Filter Input / Escape Output

