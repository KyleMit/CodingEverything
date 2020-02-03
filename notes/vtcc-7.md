---
title: VT Code Camp 7
date: 2015-09-19
---

https://2015.vtcodecamp.org/

# [Getting SQL Schema and Code into Version Control Using SQL Server Database Projects](http://vtcodecamp.org/2015/sessions#sql-schema-and-code-version-control)

Floyd Hilton

* Why?
	* Keeps history
	* Documentation (tie to issue tracker)
	* Makes process repeatable
	* Group changes (by feature)
	* Continuous Integration and Deployment
	* Portability

### Transformation

Incremental changes are saved

Not what the database looks like, but how to get there.

* Tranformation Tools
	* DB UP
	* FLyway
	* Nmigrations
	* roundHouse
	* FlunetMigrator
	* readyRoll
	* Entity Framework Migrations

### State

* State is saved, and tools are used to tranform a database from one state to another
* The full **state** of the database is stored for every version


**Hot Deploy** - checkout old schema - make change - deploy that so only the change is pushed to prod

* Tools
	* Manual
	* Entity Ramework
	* Redgate SQL Source Control
	* SQL Server Database Project
	* readyrool

### SQL Server Database Project

* Is a project inside of solution in visual studio

SQL Server Object Explorer

# [Introduction to Aurelia](http://vtcodecamp.org/2015/sessions#aurelia)

by Jeremy Danyow (Member)

Just JavaScript (ES6 / ES7)
Framework contains libraries (es6 modules)

Build JavaScript Clients (SPA)

* Philosophy
	* Open Source (MIT)
	* Clean Code
	* Simple Conventions

https://gitter.im/Aurelia/Discuss?source=explore

Why another JS Framework?

* ES6
* Modern DOM
* Web Components
* No External Dependencies (except polyfills)
* 2 way databinding
* Evolution of Durandal / Angular

async / await in es 7



```js
import {bindable} from 'aurelia-framwork'
export class Welcome {

}
```

html (case insensitive)
mixed casing -> converts pascal to lower case with hyphens


# [Writing Automated Tests Using Python, Selenium, and Behave]

by Jessica Ingrassellino

* Acceptance testing does not *test* code.  It definitely identifies problems in code.
* Acceptance testing can be done manually
* Cucumber & behave superimpose a DSL (Domain Specific Language) on top of the code

### Behave

For Python

**Structure**

* Behave layer
	* Features - what you want
* Step definitions
	* Code of how to do what you want
* Page Objects
	* Python selenium API

Syntax

* Feature
	* Scenario
		* Given
		* When
		* Then


Given, when, then are step decorators

### Links

* http://aurelia.io/
* https://github.com/aurelia/framework
* https://en.wikipedia.org/wiki/JSON_Web_Token
* https://github.com/michaek/revealjs-sync-git
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
* http://www.html5rocks.com/en/tutorials/webcomponents/template/
* http://html5up.net/
* http://webcomponents.org/articles/introduction-to-template-element/
* https://jakearchibald.com/2014/es7-async-functions/
* https://www.visualstudio.com/en-us/products/code-vs.aspx
* https://github.com/aspnet
* https://github.com/dotnet
* http://www.hanselman.com/blog/AnnouncingNET2015NETAsOpenSourceNETOnMacAndLinuxAndVisualStudioCommunity.aspx
* https://en.wikipedia.org/wiki/ACID
* http://pouchdb.com/
* http://www.sitepoint.com/building-offline-first-app-pouchdb/
