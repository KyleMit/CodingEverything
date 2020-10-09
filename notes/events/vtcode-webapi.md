---
title: WebAPI with Jamie Ide
date: 2015-07-13
---

[WebAPI with Jamie Ide](http://www.meetup.com/VTCode/events/223475194/)

[Github Code Repo](https://github.com/jamieide/StacksOfWax)

[Designing Evolvable Web APIs with ASP.NET](http://chimera.labs.oreilly.com/books/1234000001708/index.html)

[Web API Design - Crafting Interfaces that Developers Love](http://apigee.com/about/resources/ebooks/web-api-design)


* Topics
	* Web architecture

* HTTP
	* HTTP 1.1 RFC
	* HTTP 2 RFC

* Exposing resources using HTTP
	* Normally think of int terms of web pages
		* try to think of like resources
	* Stateless - get the same resource every time (plus some caching)
	* REST -> pretty urls

* Verbs
	* Create -> POST
	* Read -> GET
	* Update -> PUT
	* Delete -> DELETE

* ASP.NET Web API 2
	* First class HTTP programming model
	* Multiple formats - content negotiation (translation)
		* JSON
		* XML

* Routing
	* Sam as MVC
	* Attribute Routing
		* RoutePrefix on a class
		* Route on action

* Demo
	* App
		* Music Catalog
		* Two Classes - Artist & Album
	* Access through EF

* Visual Studio
	* Scope to this -> changes solution explorer scope

* Default WebAPI Project
	* Home controller in MVC -> drives documentation
* Scaffolding
	* Web API context controller

[Chrome Plugin - Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - monitor traffic - in browser fiddler

* OWIN - Katana
	* Empty Web API template
	* `install-package microsoft.own.host.systemweb`
	* Comment out `GlobalConfiguration` in `global.asax.cs`
	* Testing
		* Self-hosting and in-memory hosting


```cs
Iappbuilder app
var config = new HttpConfiguration();
WebRegister....
app.UseWebApi(config)
```

* Versioning
	* URL - `api/v2/artists` - easy to consume and test (BUT changes over time)
	* Querystring - `api/artists?v=2` - easy to consume and test (BUT changes over time)
	* Custom header - `x-api-version: 2`
	* Accept header - `application/vnd.artists;v=2`

[Your API versioning is wrong, which is why I decided to do it 3 different wrong ways](http://www.troyhunt.com/2014/02/your-api-versioning-is-wrong-which-is.html)

* Considerations:
	* versioning part of your domain?
	* Who are you users - how easy should it be for them to consume API?
	* Are you a purist?

* Route Template is an API
	* `api/v{version}/{controller}/{id}

* Security
	* Basic Authentication *over* **HTTPS**
		* username and password are passed in every request
		* Must use HTTPS
	* HMAC - Keyed Hash Message Authentication Code
		* Secret key and has algorithm are known to API and application
			* Checksum based on verb, method call, ip, timestamp
				* known by client and server
					* For application to application calls
		* Hash is sent in header
		* Can guard against replay attacks
			* Because we're sending a timestamp
	* OAuth 2
		* Requires token server
			* Roll your own
		* Token  is sent in request
	* Basic Authorizaiton
		* Authorization header missing
			* Server responds with challenge
		* Authorization header present
			* Server authenticates

```xml
<configSections>
	<section name="apiKeys" ..

<apiKeys>
	<add key="tester1" value="secret1"
```


* CORS - Cross Origin Resource Sharing
	* `PM> Install-Package Microsoft.AspNet.WebApi.Cors`
