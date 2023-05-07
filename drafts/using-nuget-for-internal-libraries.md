---
title: Why (and how) to Start Using Nuget Package Manager for internal libraries today
tags: ['post', nuget]
draft: true
---

If you've added jQuery to an MVC project in Visual Studio anytime in the last 3 years, you've probably done so with [nuget][nuget], the microsoft package manager.  What you might not have known is that nuget can be used to manage any versioned libraries on which your projects depend, including your own!

There are plenty of reasons to use nuget to help manage inter project dependencies.

* **Easier upgrades** to and from historical versions.  In a single command line or click you can upgrade to the latest version whenever you update a core library.
* **Better source control** management.  One of the building blocks for SOLID application development is to [Don't Repeat Yourself][dry].  And duplicate code can hurt a lot.  If two projects need a particular library, you either need to ship that library with source control, or require developers to go through a rigmarole setting up the dependencies every time they join a project.  Injecting packages means you do neither.  Each project merely keeps of list of packages it would like and the project can pull them in when it's being built so their easy to access, but don't need to be shipped in source control.
* Reduced duplication means **faster checkouts**.  I know some people who have *enormous* git repositories because everything under the sun is checked in to the codebase.  Using packages lets you keep the codebase with just the code you need to run your app and ditch the large.
* **Effortless synchronization**.  In instances where you need the same file to be included across multiple projects, you may be tempted to put that file in each project.  Having multiple [sources of truth][sot] is the bane of development and can cause bad bugs if there's a failure to update everything simultaneously.

### So what about the HOW part?

It's easier than you might think.

If you've never created a package before, start with nuget's guide on [Creating and Publishing a Package][nuget create]




From nuget's website on [Hosting Your Own NuGet Feeds][nuget feed]:


> Some companies restrict which third-party libraries their developers may use. Therefore, they might not want developers to have access to everything in the official NuGet feed, or they might have a set of proprietary libraries they want to make available in addition to the official feed.
>
> In these scenarios, you can set up a custom NuGet feed, and you can configure Visual Studio to offer that feed instead of or in addition to the official feed. A feed can be local (a folder on the local machine or a network folder), or remote (an intranet or internet URL).


[nuget]: https://www.nuget.org/
[nuget feed]: https://docs.nuget.org/create/hosting-your-own-nuget-feeds
[nuget create]: https://docs.nuget.org/create/creating-and-publishing-a-package

[dry]: http://en.wikipedia.org/wiki/Don't_repeat_yourself "DRY"
[sot]: http://en.wikipedia.org/wiki/Single_Source_of_Truth "SSOT"
