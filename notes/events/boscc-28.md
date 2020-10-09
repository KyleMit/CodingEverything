---
title: Boston Code Camp 28
date: 2017-11-18
---

## https://www.bostoncodecamp.com/CC28/schedule

### [C# 7.1, and 7.2: The releases you didn't know you had](https://www.bostoncodecamp.com/CC28/sessions/details/16553)

[Bill Wager @billwagner](https://twitter.com/billwagner) - .NET Content Team

> 
Did you see that? C# 7.1? C# 7.2? While you were working and upgrading your .NET Core SDK and Visual Studio like normal, the C# team snuck in two point releases with several useful improvements to features you already love. In this talk, you'll learn about all these features, and about a new setting that puts you in control of the C# version you target, even when you upgrade to point fixes. You'll also understand the mapping of these features to the ongoing work on the standard and new versions of the standard.

* [What's new in C# 7.1](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-7-1)
* [Welcome to C# 7.1](https://blogs.msdn.microsoft.com/dotnet/2017/10/31/welcome-to-c-7-1/)
* [Top 10 New Features Of C# 7 With Visual Studio 2017](http://www.c-sharpcorner.com/article/top-10-new-features-of-c-sharp-7-with-visual-studio-2017/)
* [7.0 and 7.1 New Features - Part 2](http://www.c-sharpcorner.com/article/c-sharp-7-0-and-c-sharp-7-1-new-features-part-two/)

#### Most Popular Technologies

1. Javascript
2. Sql
3. Java
4. C#

### Most Loved Technologies

1. Typescript
2. C#

**Want to be *loved* and *popular***


### New Features

* Improvements to recent features
	* Inferred tuple element names
	* Leading '_' in numeric literals
* Long Requested 'nice-to-have' (Quality of Life)
	* Default literal
	* Async Main
		* `static async Main()` -valid entry point for application in **7.1**
* Smaller themes
	* Reference semantics with value types
		* minimize heap allocations with value types
	* (Future) more pattern matching


### Release schedule

* .NET updates with Windows Release updates (spring & fall)
* Some language components unlocked via library components (install via nuget)
* Point releases - off by default
	* C# 7.x is C#8--
	* 7.1 is a *proposal* for 8.0
* ECMA Standard
	* Only submitted on Major releases
		* C#5 sent to ECMA
		* C#6 standards work to start soon

### Decoupled Releases

* Pick C# version of compiler per project
	* Configure in Visual Studio
	* Edit .csproj file
	* Code fixes
		* use a newer feature - VS suggests upgrading
* Roslyn as open source
* Visual Studio updates injected without new release versions

### Tuples

* Un-named anonymous types... BUT value structures - return more than 1 value
* Anonymous type - class (reference type) - immutable
	* Can only use that name within context of where it was defined
	* Can't pass externally
* Tuples are made with compiler magic - generic value type
	* Named properties get intellisense names
	* Unamed properties get version numbers

```cs
// create tuple
ValueTuple<double,double,double> tple = (3,4,5)
// inferred names
select (x:x, y:y, z:z)
select (x,y,z)
```

Default typing for value types (structs)

```cs
Point3D point = default(Point3D)
Point3D point = default
```

* default for reference type is null

Only get properties -> must be in constructor

```cs
// tuple syntax for assignment
(X,Y,Z) = (x,y,z)
// add to expression bodied member in constructor
```

`ref` keyword - saves a copy - passes original from stack
`in` keyword - like a reference in that it saves a copy (of a value type), but it's a read only version - cannot modify within the method, but 
`out` keyword
`readonly` `struct` - entire thing is immutable - now we can overload `==` operator and pass by ref

`private protected` - derived from this type and found within this same assembly has access to this method/property/function


## [A panel discussion on the future of .NET](https://www.bostoncodecamp.com/CC28/sessions/details/16557)


[Bryan Hogan @bryanjhogan](http://twitter.com/bryanjhogan) Code Meetup
[Bill Wagner @billwagner](http://twitter.com/billwagner)- MS / C#
[Bill Wilder @codingoutloud](http://twitter.com/codingoutloud) - MS MVP
Richard Crane

>A broad ranging discussion, moderated by Bryan Hogan, on the current state of the art and the likely future with four experts in their fields.

#### Q: Decline in Windows Servers for hosting MS apps?

Move reliance from OS -> Framework itself

Python app... unlikely to have OS dependencies

.NET Core - isn't going to be OS dependent
OS hosting vendors will have to fight for loyalty - Choice is good
Can offer different sort of Security/Performance/Cost/Reliability

#### Q: Move from .NET Framework -> .NET Core

Customers did not like idea that you have to throw out stuff to move to core

Advent to .NET Standard

Core
Smaller footprint
Rev your app, instead of the OS it's on
.NET Core is a set of libraries that ship with your app

**Bill** - New application today - most likely it's web based & cloud based

`??` **What do you do when there's a feature you're accustomed to that's not ported to core yet?**

Microsoft is a backward compatability company

#### Q: .NET Core Capabilities in the Cloud

[Podcasts - .NET Rocks](https://www.dotnetrocks.com/)

Vendors (Amazon/Google/Azure) looking to get .NET in their cloud

Java vs. .NET - future?

#### Q: What do you see .NET core being used for & why


Compile to Native Code (run on IL)
Compile to Java Runtime

**Multi-service play**:
Node runs on Azure - "if we can't beat them, we'll charge them for services"

JavaScript - invented for very specific problem - talk between DOM and Java Plugin... all those warts carry through today

**TypeScript** solving JavaScript problems

**Anders Hejlsberg**, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.

Type Iteration - `List<T>`

Java - doesn't know anything about `T`
.NET - value types are compiled, reference types carry metadata


#### Q: .NET Core Implications for DevOps

Care about more platforms / play on more platforms

Anxious in future proofing skillset - expansion of MS products eases anxiety

TeamFoundation embracing GIT

#### Q: .NET apps for widest possible audience

Rely on .NET Standard

#### Q: Cloud agnostic?

Container technology - like docker enables easy deployments to any cloud

**Cross Cloud** is the new **Cross Platform**

#### Q: Hiring Skillsets?

Skills across disciplines (not UX dev / mobile dev) - multiple skills
Mill5 - learning plan? Every employee has to have a learning plan

**`??` is that reflective of the size of your shop?**

#### Q: Specialize vs. Full Stack as a Dev?

**Ben**: Cross functional teams - vastly better

**`??` Cross functional teams vs Cross functional team members**

Graph task and skill dependencies - risk in deliver if you assume specialization

> **Career Advice** - Jack of all trades, master of some

New Requirement: People Skills
