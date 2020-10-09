# Boston Code Camp 29

## [Running Securely on Azure](https://www.bostoncodecamp.com/CC29/sessions/details/16632)

**Bill Wilder** - [@codingoutloud](https://twitter.com/codingoutloud)

### [WIKI - Information Security](https://en.wikipedia.org/wiki/Information_security)

#### Attack Vectors

* Enumeration Attack
* Phishing Attack
* Meltdown / Spectre

#### Prominent Attacks

* Equifax
* Yahoo
* Ashley Madison
* John Podesta (Hillary's )
* Office of Personal Management
* Cambridge Analytica (facebook)
* Amazon Web Services
* CodeSpace (GitHub competitor)
  * Sequence:
    1. DDoS
    2. Ransom Demand
    3. Security Breach Noticed
    4. Fighting Back
    5. Malicious Destruction of Assets
    6. Security & Business #fail
  * #Fails
    * **Data Plane vs. Control Plane**
    * MFA
    * Backups
    * Separation of Duties with Role-Based Access Control (**RBAC**)


### Rules of Engagement / Security Philosophy

* Shared Responsibility Model
* Platform Responsibilities
* Your Responsibilities

### What Azure does

* Physical Security
* Encryption
* Pipes
* DDoS, network monitoring
* SDLC
* Red Teaming (Attack own services - white hat)
* Bug Bounty Program
* Security Toolbox

### Top Azure Risks

### Terminology

* **Defense in Depth**
* **Attack Surface**
* **Mistake Surface**

m&m - hard on the outside, soft on the inside

### What Customer Does

* Proper secure application development techniques
* Proper secure operational management policies
* User Education

### 6 CIA Lenses for applying Azure security

[![CIA](https://i.imgur.com/VtTvie1.png)](https://www.checkmarx.com/2016/06/24/20160624the-importance-of-database-security-and-integrity/)

**CIA** - Confidentiality, Integrity, Availability

1. Identity
2. Application Security
3. Keys & Secrets
4. Networking
5. Data

Tor web browser - Firefox fork that obscures IP address

### CIA #1 - Identity

Azure Active Directory - official Identity provider of Azure Platform

Geo-aware threat detection

* Unusual Locations
* Bad / Known Ips
* MFA Escalation - **Ultimate Weapon**

### CIA #2 - Application Security

\#9 & \#10 easier to hit with Azure

#### [OWASP Top 10 Application Security Risks](https://www.owasp.org/index.php/Top_10-2017_Top_10)


* 1 - Injection
* 2 - Broken Authentication
* 3 - Sensitive Data Exposure
* 4 - XML External Entities (**XXE**)
* 5 - Broken Access Control
* 6 - Security Misconfiguration
* 7 - Cross-Site Scripting (**XSS**)
* 8 - Insecure Deserialization
* 9 - Using Components with Known Vulnerabilities
* 10 - Insufficient Logging & Monitoring


### Security is *possible* -> *provable* (audits)



## [Authorization for Modern Applications](https://www.bostoncodecamp.com/CC29/sessions/details/16643)

Brock Allen - [@BrockLAllen](https://twitter.com/BrockLAllen)



[Identity Server](http://identityserver.io/)

![Identity Server](https://i.imgur.com/c7GjwGG.png)

[Policy Server](https://policyserver.io/)

![Policy Server](https://i.imgur.com/A6IfcXe.png)


### Authorization is Hard

* Many Approaches
  * roles vs. permissions,
  * resource-based,
  * ACL - Access Control List (i.e. Windows Files)
  * queries (READ) vs. commands (Insert, Update)
  * No Standard Solution

* No Standard Solution
  * Often application specific
  * Blurry line between authorization and business rules
  * XACML -> failed attempt to standardize

**Previous**: Windows Authorization Manager (AzMan)

Centralized Identity Provider - Implement OAuth
^Especially when we want to share authentication across apps

Next want to centralize Authorization


Identity - Driver's Licence
Permissions - Using Driver's Licence to determine permissions (can by alcohol / permission can change in Canada)


Identity != Permissions
Identity + Permissions = Authorization
^need to contextualize identity and permissions within the application

### Policy Server

Nuget Package

Load into DI (Dependency Injection) on Startup
app.config


`[Authorization(Role="")]`
^ Looks at Claims Principle
^ Normally hydrated by MS when intercepting call

* app.UseAuthentication
  * Converts Cookie into Claims
* app.UsePolicyServerClaimsTransformation
  * Policy Server Middleware
  * Hydrates User Claims with additional roles by calling evaluate to take in current user claim /role and add

* Hard to Unit Test Authorize Attribute
* Hard to Maintain if acceptable Roles changes


### New Auth Library in ASP.NET Core from Microsoft

* Introduces a policy-based framework
  * Decoupling authorization logic from business code
  * extensible
  * testable

### ASP.NET Core Policy Based Authorization


`Authorize["Policy name"]`


IAuthorizeService -> Invoke programmatically and access through DI
Not just available declaratively through Attribute





## [Behavior Driven Development with Node.js](https://www.bostoncodecamp.com/CC29/sessions/details/16584)

 Philip Hayes [@deewhyweb](https://twitter.com/deewhyweb)


### Agile Testing Quadrant

[![Agile Testing Quadrant](https://i.imgur.com/NWBzQnp.png)](https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/)

### User Story

As a gold level customer
I want to receive a %15 discount on orders over $40
So that I can save money

### Unit Test

```js
assert.equals(42.50, order.price()
```


```js
given "a gold level customer", {
        customer = new GoldCustomer();
}
when "their shopping cart" {}
then "they should receive a 15% discount", {}
```

### [Gherkin Script](https://github.com/cucumber/cucumber/wiki/Gherkin)

It is a business readable, domain specific language that doesn't dictate a technological end point

### Define Acceptance Criteria in BBD syntax

NPM Packages

* assert
* cucumber
* cucumber-html-reporter


https://github.com/cucumber/cucumber



`*.feature*` file

Just [gherkin](https://cucumber.io/docs/gherkin/) human readable text

```bash
cucumber-js -f  cucumber-report.json
```

* 2 Undefined Scenarios
* 6 Undefined Steps

```bash
git checkout step 3
```


## [Intro to Progressive Web Apps: Adopting an Offline-First Mindset](https://www.bostoncodecamp.com/CC29/sessions/details/16615)


Jayson Alzate [@jayson_alzate](https://twitter.com/jayson_alzate)


[Progressive Web Apps (**PWA**)](https://en.wikipedia.org/wiki/Progressive_Web_Apps)

### Evolutions of Web Apps

Single Page Apps (SPAs) -> Mobile First -> Offline First

Mobile Usage Beginning to outpace Desktop Usage

Native Apps - 50% of users don't download apps in the last month

90% of app time spent in favorite 5 native apps


Year over Year in last 4 years, top 10 apps have grown 1000% in size

"Progressive enhancement"

It gains functionality over time


### Benefits

* Low/No Connectivity
* Same Code, Same Devs
* Less SSD Space
* Push notifications
* Syncing
* Degrade Gracefully
* No App Store Limitations
* Maintain same deploy process

Rule - every time you put a barrier in front of a user, 20% of users walk away


Difference vs. Bundle


### Limitations

* [Can I Use Service Worker](https://caniuse.com/#feat=serviceworkers)

![Service Worker](https://i.imgur.com/uHZVOVL.png)


* Limited Integration with Hardware (i.e. Biometrics)
* Caching is Hard
* New Tech

### Case Studies

* Tinder - Released PWA
* Twitter Light
* Forbes
* Pinterest


### Future

* By 2020, progressive web apps will have replaced 50% of general-purpose customer facing applications


### PWA Components

* Service Worker
* IndexedDB
* Cache API
* Sync

**Service Worker** - like Personal Assistant

* Train them...
  * when Grandma Calls, say Happy Birthday Nana
  * when order-received, say log that for later


* Order Spreadsheet -> IndexedDb
* Backlog Fulfillment -> Background Sync



#### Service Worker Lifecycle

* Installing (Caching)
  * Error
  * Activated
  * Idle
    * Terminated
    * Fetch/Message



#### IndexedDb

i.e. If Mongo DB Lived in your browser

Nice to Know

* Transaction Object Store database in browser


#### SyncManager

* Constantly tries to send requests even when you exit the page
* Browser vs. Mobile Device


#### CacheAPI

* allows us to store network requests to serve up later

#### Native-"like" functionality

* Manifest file
  * Full screen
  * Icons
  * Push Notification API

### Future/ Promising APIs

* Payment Request API
* Credential Management API
* WebGL - 3D Graphics


### Best Practices

* Users First
* Cache Sparingly
  * Only cache items that user has selected
    * grey out if cached version not available
* Cache Smart
* Alert users that they are in "Offline Mode"
* Beef up skeleton states / loading states
* Notifications - Notify, don't SPAM


### Resources

* Google Lighthouse (Chrome Plugin)
* [Building Progressive Web Apps by Tal Ater](https://www.amazon.com/dp/B075HP52WY)
* Pluralisght
  * Building Offline Web Apps with Service Worker
  * Progressive Web App Fundamentals
* Check Support Status
  * Can I Use
  * Service Worker Ready

[pwa.rocks](https://pwa.rocks/)


PWA - Access to features based on if you've added to home screen?



## [Improving Performance with Service Workers and Web Workers](https://www.bostoncodecamp.com/CC29/sessions/details/16621)

Christina Kayastha - [@christikaes](https://twitter.com/christikaes)

Senior Software Engineer @Vista Print

JavaScript - Run *Anywhere*

Screen -> Browser -> Javascript

Internet Connectivity not guaranteed
    -> Service Worker
JS Single Threaded
  -> Web Worker


Fast && Reliable


Offline Mode -> "Downasuar"

LieFi - phone thinks you're connected to the internet, but you're not

Anything your page loads, the service worker can cache

Offline or Intermittent

```bash
http-server
```

[Lighthouse](https://developers.google.com/web/tools/lighthouse/)


Chrome Extension
Part of Dev Tools 65

```js
if ('serviceWorker' in navigator) {
   navigator.serviceworker.register('./sw.js')
                          .then(x =>
                              console.log('installed')
                          );
        }
```



```js
var urls = [
    './',
    './index.html',
    './image.gif'
]

self.addEventListener("install", event => {

});
```

Service worker lives between client and server

[Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)


[WebPack](https://webpack.js.org/)

[Vue.js](https://vuejs.org/)

[sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin)


Precache vs. Runtime Cache

[Workbox](https://developers.google.com/web/tools/workbox/)


Progressive Web App - Any application that acts as if it's native

App Shell - HTML/CSS/JS

Service Worker - QB

App Manifest - Native like install (similar to android manifest xml file)

Jake Archibald / Alex Russle

[Caching Strategies](https://jakearchibald.com/2014/offline-cookbook/)

[Is Service Worker Ready](https://jakearchibald.github.io/isserviceworkerready/)



### Web Workers - Removing page jankiness

[![Web Worker Compatibility](https://i.imgur.com/ZYHvOoR.png)](https://caniuse.com/#feat=webworkers)

* Any heavy lifting javascript - entire page frozen

JavaScript

> Every line of frontend JS you've ever written has momentarily stopped your page from working
> \- @noalanlawnson

Event Loops

> Event Loops
> \- @laffathecake


1. Task Queue
2. Event Loop
3. Style / Layout / Paint


[@linclark](https://hacks.mozilla.org/2017/06/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/)


![LinClark Comics](blob:https://imgur.com/e8685136-e41a-4884-9640-4b72a579d463)


Service Workers are a type of Web Worker

[Promise Worker](https://github.com/nolanlawson/promise-worker) - wrapper for Web Workers that implements promises


??? Get Last Update Time of CodeValues
Drive Cache Hits off that




## [Create an Engaging Native Mobile App with Vue.js and NativeScript](https://www.bostoncodecamp.com/CC29/sessions/details/16620)

https://slides.com/telerikdevrel/ns-vue-long/live

Jen Looper [@jenlooper](https://twitter.com/jenlooper)


### Diversity Initiatives

* ng-girls
* [vue vixens](https://vuevixens.org/)

`$whoami`


### NativeScript

A framework for building native, cross-platform mobile apps

Javascript -> Nativescript

Angular (heavy load -> Use Webpack)

NativeScript-Vue

Vue's 2.0 Adoption of Virtual Dom Enables **Native Mobile Rendering** (similar to Angular 2+)

* Use nativescript Vue, not regular Vue


### [Play NativeScript](https://play.nativescript.org/)

* Mirror Phone Deployment while writing on Web


https://play.nativescript.org/?template=play-vue&id=XIBIAe&v=5
https://play.google.com/store/apps/details?id=org.nativescript.play&rdid=org.nativescript.play

* [nativescript](https://www.nativescript.org/)
* [nativescript - vue](https://www.nativescript.org/vue)
* [nativescript - vue](https://nativescript-vue.org/)
* [vuetifyjs](https://vuetifyjs.com/en/) - Material Design for Vue
* [firebase](https://github.com/firebase/* FirebaseUI-Android)
* [vuex](https://vuex.vuejs.org/en/intro.html)
* [firebase](https://firebase.google.com/)



#### Workshop

https://github.com/vuevixens/docs
https://vuevixens.github.io/docs/#/
https://vuevixens.github.io/docs/#/supplement1



## [Building RESTful APIs with ASP.NET Core 2.0](https://www.bostoncodecamp.com/CC29/sessions/details/16645)


Lina Lekova [@linalekova](https://twitter.com/linalekova)

Software Engineer @ VistaPrint

### Overview

* What's Rest?
* What's ASP.NET CORE?


## What's REST

**RE**presentational **S**tate **T**ransfer

* Architectural *style* for designing networked applications
* REST is *an abstraction of the web*

Not synonymous with JSON & HTTP, but pretty standard at this point

Roy Fielding defined REST in his 2000 pHD dissertation - "Architectural Styles and the Design of Network-based Software Architectures"


### REST Constraints

Constraints can be reviewed as *design decisions*

* Client - Server
  * Consumer of API shouldn't be concerned with how data is stored
  * Server shouldn't be concerned with how the data is presented to user or the client's state
  * Client and server can evolve separately
* Stateless
  * Server does not keep *application state*
  * Each request has to have *enough context* to be processed
  * Makes for easier distribution to load balance servers -> introduces *scalability*
  * Easier to cache
* Cacheable
  * Each *response* must explicitly state if it can be cached or not
  * Caching can take place in browser or or caching server
* Layered System
  * Client doesn't and shouldn't know if the response it got is coming from a cache or directly from the server
  * Restricts knowledge to only immediate layer
  * Cannot access subsequent layers
* [Code on Demand]
  * Server temporarily extends the client by transferring logic to it
        + i.e. JavaScript
  * Not required / optional
* Uniform Interface
  * API and it's consumers share single technical interface
  * APIs don't know about clients
  * Clients don't know about server implementation
  * **Sub Constraints**
    * Resource *URI*
    * Manipulation of resources through representation
      * HTTP Media Types (application/JSON)
    * Self-descriptive messages
      * HTTP Methods (GET,POST)
      * Status Codes (200 ok)
    * HATEOAS - Hypertext as the Engine of Application State Links


Violating *any* constraint means the service is not *strictly* Restful

-> We have HTTP API
-> NOT Restful APIs

If we do: *ilities

* Scalability


### Richardson Maturity Model

from a 2008 conference talk as a way to judge how closely we match the spec

* Level 0 (the swamp of POX) (e.g. in SOAP)
  * All Post messages with different Data
* Level 1 (resources)
  * Introduces URI `movies/{id}`
* Level 2 (verbs)
  * GET to acquire resources
  * POST to create resources
* Level 3 (hypermedia)
  * Links Get Returns links to do


### ASP.NET Core

* cross-platform
* open-source framework
* Internet connected applications
* lightweight
* fast
* C#


#### Getting Started

https://dot.net/core


Dot Net CLI


```bash
dotnet --version
dotnet new mvc --auth Individual
dotnet new viewimports --namespace
dotnet new --help
```


* Model, View, Controller (without the View)

```cs
// console app - entry point to program
public static void Main(string[] args) {
    BuildWebHost(args).Run();
}

public static IWebHost BuildWebHost(string[] args) =>
   WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
```

```cs
public class Startup
{
    public void ConfigureServices(...)
    public void Configure(...)
}
```

* Method
  * GET
  * POST
  * PUT
  * PATCH
  * DELETE
  * HEAD
  * OPTIONS
* Request Payload
* URI
* Response Payload


### Routing in ASP.NET COre

URI -> Map to a *Action/Controller*

**Two Ways**:

* Convention Based
* Attribute Based

```c
[Route("api/[controller]")]
public class MovieController : Controller {

[HttpGet]
[HttpHead]
public IActionResult Get()

[HttpGet]
[HttpOptions]
public IActionResult Get()
}

[Route("api/movies")]
public class MovieController : Controller {}
```


#### Model Binding

```cs
Post([FromBody]MovieForCreationDto movie)
```

> *Advisable to separate your database handling vs your view model handling*


Data Representation - Mapping

* Consumer-Facing Modeling (JSON/XML)
  * Data Transfer Object (DTO)
* Database Modeling

```cs
AutoMapper.Mapper.Initialize(cfg => {
    cfv.CreateMap<MovieClient,Movie>
})
```

```cs
ModelState.IsValid
```


### Http Status Codes


Level 200 - Success
<del>Level 300 - Resource Changed</del> (not useful for APIs)
Level 400 - Client Mistakes
Level 500 - Server Mistakes



Separates out where you do your model binding from

```cs
HttpPut("{id}")
public IAction Update(int Id, [FromBody] Movie movie)
```

#### Content Negotiation

* Return types
  * JSON
  * XML


### Resources

cURL - submits requests (with typing)
Postman - GUI to submit requests



### Bonus

[ZoomIt](https://docs.microsoft.com/en-us/sysinternals/downloads/zoomit)




