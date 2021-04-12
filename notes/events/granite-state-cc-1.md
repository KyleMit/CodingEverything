---
title: Granite State Code Camp
date: 2018-11-03
---


[Site](https://granitestateusersgroups.org/schedule/)
[Sessions](https://sessionize.com/api/v2/2k7oucky/view/grid)



## Xamarin Forms Challenge

Carl Barton - Microsoft MVP, Xamarin MVP

[Xamarin Docs](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/)
[Xamarin Github](https://github.com/xamarin/Xamarin.Forms)
[Xamarin Article](https://www.hanselman.com/blog/XamarinFormsWriteOnceRunEverywhereANDBeNative.aspx)


### Xamarin Overview

![Framework](https://i.imgur.com/4MR6es2.png)


* Traditional Xamarin - Shared Backed
* Xamarin *Forms* - Shared UI Apps
  * Xamarin.Button
    * iOS -> iOS.Button
    * Android -> Android.Button

### Write Once, Run Native

* Native User Interfaces
* Native API Access
* Native Performance

### Features

* Binding
* MVVM Patterns
* Prism (from WPF)

### Out-of-the-box

* 40+ pages, layouts, and controls
* Two-way data binding
* Navigation
* Animation API
* Dependency Service
* Messaging Center

> xamarin demo comic
> "do we get to mess with him now"
> "we wait until the worst possible moment"

### Deployment Targets

* iOS
* Android
* Windows Phone
* Universal Windows (UW)
* Tizen (Samsung)
* Web
* WPF

### Demo

File > New Project > Cross Platform


## Getting started with Azure IoT

Jim O'Neil, Microsoft Azure MVP

[iot Hub](https://azure.microsoft.com/en-us/services/iot-hub/) - stores messages up to 7 days, but it's just a publisher of info; you need to hook up a subscriber


Raspberry Pi

Install:

* Node
* Node IMU
* Node MQTT
* MS IoT SDK

SSH into Raspberry PI

* Historically: Just Heartbeat
* Edge Computing: Let IoT devices make some smart decisions and run logic there

**Pull** Data

* Time series insights

**Push** Data

* Routes


Service Bus > Event Hub > IoT Hub

Data Center
Free on the way in
$$$ on the way out

[ngrok](https://www.npmjs.com/package/ngrok) - get public IP address and forwards (tunnels) to other ports/protocols





## Single Container Workload (in Azure)

By Jason Haley
http://jasonhaley.com/


* A website that can be deployed to Azure Web App
* A console app
* A sidecar along-side a main projects

### Azure DevOps Project

* Project Type
* Creates CI/CD Server

Azure Container Registry (ACR) - (Same as private Docker Hub)



## Debug like it's your job

Bob Crowley [@Contrivedex](https://twitter.com/Contrivedex)

* Know your Tech Stack
  * Know your abstractions
    * Learn SQL even if you use an ORM
    * Learn HTML even if you use WebForms
    * Learn CSS even if you use Bootstrap

* Rubber Duck Debugging
  * Verbally walk through your code with your duck (or, a co-worker)

* Take a walk
  * Context Switching is hard

* Profiling & Tracing
  * SQL Profiler
    * Use App name in connection string
  * Network
    * Fiddler
  * Dev Tools
  * Code
    * [Prefix](https://stackify.com/prefix/)

![Prefix](https://i.imgur.com/wSILLvm.png)


* Playground Utilities
  * F12 Browser TOols
  * [LINQPad](https://www.linqpad.net/)
  * .NET Fiddle
  * SQL
  * Postman/Fiddler

> Reduce time in Feedback Loop
> Isolate an operation


* IDE Features
  * Console / Immediate Window
  * Call Stack
    * Pause on Exceptions
  * Watches
  * Run To...
  * Breakpoints

* Known Good Values (KGVs)
  * Is your code logic wrong or are it's inputs wrong
  * Garbage In; Garbage Out (GIGO)

* Network Traffic
  * Save as HAR
  * HAR Viewer
