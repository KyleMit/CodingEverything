---
aliases:
  - Project File
  - .csproj
---

# MS Build

> MSBuild (Microsoft Build Engine) is a build platform for managing the process of compiling, packaging, and deploying software. It is used to build applications, manage dependencies, and automate the build process. MSBuild is integrated into Visual Studio and is the default build system for .NET projects, including .NET Core and .NET Framework.

## Docs


* Overview
  * [Specify build components & processes with MSBuild - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild-concepts?view=vs-2022)
  * [Understanding the Project File | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/web-forms/overview/deployment/web-deployment-in-the-enterprise/understanding-the-project-file)
* Tutorials
  * [MSBuild Tutorial: Install and create a project - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/walkthrough-using-msbuild?view=vs-2022)
  * [Create an MSBuild project file from scratch - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/walkthrough-creating-an-msbuild-project-file-from-scratch?view=vs-2022)
* Docs
  * [Customize your build with extensibility hooks](https://learn.microsoft.com/en-us/visualstudio/msbuild/customize-your-build?view=vs-2022)
  * [Customize your build by folder or solution](https://learn.microsoft.com/en-us/visualstudio/msbuild/customize-by-directory?view=vs-2022)


## CLI

* [MSBuild Command-Line Reference - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild-command-line-reference?view=vs-2022)

## Project SDKs

* [.NET project SDK overview](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/overview)
* [Reference an MSBuild Project SDK](https://learn.microsoft.com/en-us/visualstudio/msbuild/how-to-use-project-sdk?view=vs-2022)


## Shared Resources

* `Directory.Build.props`
* `Directory.Build.targets`
* `Directory.Packages.props`


## Questions


* [How to change C# Language Version for all of the projects in my solution in one place?](https://stackoverflow.com/q/61434436/1366033)

  Add to `Directory.Build.props`

  [Customize your build](https://learn.microsoft.com/en-us/visualstudio/msbuild/customize-your-build)
