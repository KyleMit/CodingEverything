---
title: VT Code Camp 10
date: 2018-09-15
---

https://2018.vtcodecamp.org/

## For the DotNoobs! Leveling Up Your C\#

by **Bob Crowley**

### Ref Keyword

> Do Not Pass By Reference

### HttpClient

`System.Net.Http.HttpClient`

* Stores Cache Hits, longer lifespan preserves cache longer
* Pre-load requests that might be needed later

### Async & Await

* Avoid blocking
  * avoid ```...async().Result` or `...async().Wait()`
* Try to get `async` all the way down
* Compiler goes to a lot of trouble to setup async continuations
* If you block

### Throwing Exceptions

**Exception filter in C#6**

```cs
public void DoSomething()
{
    try
    {
     var x = 9/0;
    }
    catch (Exception ex) when(Log("oops")) {
        // won't step into here if log returns false
    }
}

private bool log() {
   return false;
}
```


### SqlParameters

Don't use `.AddWithValue` - moderated for SP users



## Exploring User Mental Models of Data Sharing

by **Amy Chess**



### "Recalculating!" - Navigating Container Technologies and Azure

by **Chris Bowen**

Docker.com

#### Docker

#### Azure Container Registry

**Thundering hurd problem** - everything going down (and up) at once

### Kubernetes (from Google)

**Provides Orchestration**

**Containers benefit from, but don't do themselves**:

* Scheduling
* Affinity / Anti-affinity
* Health Monitoring
* Failover
* Scaling
* Networking
* Service Discovery
* Coordinate app upgrades

`ACS` - Azure Container Service
`AKS` - Azure Kubernetes Service


### ASP.NET Core 2.1 Web APIs for your Web and Mobile Apps

by **Chris Woodruff** - Jet Brains Dev

#### Pitfalls & Tips

* Controller → **Model** → EF → DB
* Don't do Data Access inside controller
  * Break up project into smaller pieces
* Decouple Data Access (EF Core) with your project domain
* Do Integration Testing & Unit Testing
* Pass the correct codes


#### API Layer

* Interact with Consumers using **ViewModels**

#### chinook sample db

![chinook schema](https://i.imgur.com/CEKrb93.png)

https://github.com/lerocha/chinook-database


#### Domain Layer

* Contains all my interfaces for Data Retrieval
* Contains Dependency Injection

View Model ⇄ Domain Layer / Supervisors ⇄ Entity Model


#### [Swagger](https://swagger.io/) - Build and Document APIs

#### Dependency Injection Layer

* Pass an Interface and a default implementation

#### [AutoMapper](https://automapper.org/) is a simple little library built to solve a deceptively complex problem - getting rid of code that mapped one object to another

ADO.NET Support - Map from IDataReader



## Accessibility Awareness: Empowering Everyone

by **Mandy Swithenbank** / Vernier

### Curb Cuts

#### Accessibility

#### Inclusive Design & Universal Design

#### User Experience

* for, well, **People**!

Disability is a spectrum - not a boolean

* See
* Hear
* Walk
* Read Print
* Write with pen/pencil
* Communicate Verbally
* Tune out distraction
* Learn
* Manage Physical/Mental health

Disabilities can change:

* Throughout your life
* Throughout the day (cognitive skills)

Everyone, at some point, will have temporary/situational Impairments


### Diversity of Abilities

* Visual
  * Screen Reader Captions
* Mental
* Physical
* Auditory
* Speech


Offer multiple or alternative ways to accomplish a task

Imagine putting yourself in other people's shoes - engage with real people (especially have devs do that)

#### Persona

* Ability
* Attitude
* Aptitude


WCAG - Levels of Conformance

Level A - minimum standards
Level AA - goldilocks level <- just right
Level AAA - highly capable

WCAG **POUR** Principles

* **Perceivable** to the senses
* **Operable** interface controls
* **Understandable** content and interface
* **Robust** structure that can be interpreted by various user agents (lots of different types of user agents - SEO, users, screen readers)

Screen readers user keyboard for all interaction
& So do power users



#### Evaluation Tools

Check for WCAG Compliance

* Semantic Structure
* ARIA
* Contrast

* AXE - Accessibility engine
* Lighthouse
* WAVE - Web Accessibility Evaluation Tool

#### Testing

People test with multiple devices
Test with multiple hardware
Test with Keyboard (just take away mouse)

* Tab
* Shift
* Enter
* Space
* Arrow Keys

`:focus` is `:hover` for keyboard

Focus indicator to tells you what action you're about to perform an action on

Accessibility issues with custom JS dropdowns

#### Keyboard navigation for mobile devices

Skip links - helpful for sighted users and especially for

* Screen magnification software

Software: screen readers - browse the DOM

### Screen Reader Tools

* Voice Over
* NVDA

Speed / slow down speech (power users)

Try turning off your monitor - putting a


Stairs = Barriers

> It's the stairs leading into a building that disable the users, not the wheelchair

Barriers on the web

* Contrast
* Closed Captions
* Layout
* Keyboard

> For every barrier, there's a curb cut!!


### Building Serverless Data APIs

by **Julie Lerman**


### Serverless Functions

* Function as a Service (FaaS)
* "Serverless compute"
* Abstract away implementation details
* You can focus on the code

### Companies (Big Guns)

* Microsoft Azure Functions
* Google Cloud Functions
* Amazon AWS Lambda


### Function

* Trigger
* Input Bindings
* YOUR CODE HERE
* Output Bindings

Triggers, inputs, and output bindings all done with config

Trigger - almost like an If This Then That (`IFTTT`) - can be anything (i.e. `HTTP` Request)

> "Everybody here should understand this.  It's not that I don't know how to read error messages; I don't have the patience to read error messages!"

### Visual Studio Code *Extensions*

* Azure Functions Extension
* Cosmos DB Extension

Postman
