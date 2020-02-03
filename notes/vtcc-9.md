---
title: VT Code Camp 9
date: 2017-09-16
---

https://2017.vtcodecamp.org/

* [Meetup](https://www.meetup.com/preview/VTCode/events/240096766)
* [Site](https://www.vtcodecamp.org/)
* [Code Camp Chanel](https://btvdev.slack.com/messages/C1SCJ7MU7/)
* [Code Camp Slack](https://vtcodecamp.slack.com/)
* [#vtcc9](https://twitter.com/hashtag/VTCC9)
* [Sign Up Sheet](https://docs.google.com/spreadsheets/d/1nIbqhi_OgHhPvYQOdtQswq_C49VWhGPo_Y6jBXdrU7I/edit#gid=520010521)


https://10up.github.io/Engineering-Best-Practices/

## Forget Fonts: Why (and How) UX Practitioners Should Partner with Back-End Developers
[by Amy Chess](https://twitter.com/amychess)

## Threat Modeling for Secure Software Design
[by Robert Hurlbut](https://roberthurlbut.com/)

Breakdown in secure design

* GitHub Mass Assignment
	* Written on Ruby on Rails (MVC)
	* Overrode `IsAdmin` property
	* Fixes
		* DataValidation
		* Access Control
		* User Validation
		* View Model (only transmit needed variables)
* Jeep Cherokee Hack
* Target Breach

Not an automated tool (pen testing) - systematic way of thinking


### Terms

* **Threat Agent** - someone who intends to do harm to your system
* **Threat** - An adversary's goal
* **Vulnerability** - A flaw in the system that could help a threat agent realize a threat
* Risk
* **Asset** - Something of value to valid users and adversaries alike

Agile

* **Don't** passively I hope they don't
* **Do** edd in *active* stories early-on ....
	* ie. un-authenticated users should not be able to access data


#### Threat Modeling Session

* Gather documentation
* Gather your team
* Understanding business goals and technical goals
	* Threat modeling to support goals, not other way around
* Plan on 1-2 hour sessions
* Be honest, leave egos at the door

Equifax - used Third party libraries (if they patch, you must patch too)

Microsoft Threat Modeling Tool 2016


IEEE Computer Society Center for Secure Design

Avoiding the top 10 software security design flaw

https://www.computer.org/cms/CYBSI/docs/Top-10-Flaws.pdf
![Paper](https://i.imgur.com/9LMbwUg.png)

Draw your picture 
* similar to architecture diagram - but specific to threats

Browser --> Web Server --> Data Server

HTTPS
Forms Auth / Roles

Data Flow Diagram (DFD) (MS SDL)

* External Entity
* Process
* Multi-Process
* Data Store
* Dataflow
* Trust Boundary

Think about **Attack Surface**

Firewall minimizes possible attack surfaces


### Identify Threats

* Attack Trees
	* Bruce Schneier
* Threat Libraries
	* CAPEC
	* OWASP TOp 1
	* SANS TOp 25
* Checklists
	* OWASP ASVS
	* Proactive Controls
* Use Cases / Misuse Case

### STRIDE

Threat                | Property We Want
--------------------- | ---------
<b>S</b>poofing          | Authentication
<b>T</b>ampering         | Integrity
<b>R</b>epudiation       | Non-repudiation
<b>I</b>nformation Disclosure | Confidentiality
<b>D</b>enial of Service      | Availability
<b>E</b>levation of Privilege | Authorization


### Identify Threats - functional

* Input and data validation
* Authentication
* Authorization
* Configuraition Management


### Mitigation Options

* Leave as-is
* Remove from product
* Remedy with technology countermeasure
* warn user (check the box to connect to open wifi)

### Risk Management
* FAIR (Factor Analysis)
* High, Medium, Low


Configuration Management

We own the box -> Risk Low
House on Cloud -> High


Living Threat Model


## A Developer's Guide to WordPress
[by Josh Lee](https://github.com/joshleecreates)
@[joshleecreates](https://twitter.com/joshleecreates)

Powers 20-30% of the internet

WordPress.org
WordPress.com

**Core Values** - Accessibility & Extensibility

Posts - your only data type in wordpress
wp table

#### Some built in post types:

* Post - has chronological component
* Page
* Attachment

### Custom Post Types

* Recipe
* Book
* Portfolio Item

Find + Replace - breaks serialized data in PHP operation

Some plugins unwrap, replace, and re-wrap

### Categories and Tags

* Taxonomies - classification of things
* Hierarchical (categories) vs tags

### Action Hooks

baby event listeners

Loading Wordpress

Loading Plugins
Loading Themes


### Debug Tools

[Genesis Framework](https://my.studiopress.com/themes/genesis/)
Debug Bar
Query Monitor

### Filters

like action hooks
but the callback takes and returns an argument

###  Themes vs. Plugins

#### Themes
Themes must contain an index.php and style.css
Get site up quickly with very little knowledge
Stuck with theme over time - hard to change

#### Plugins
Build from the ground up



## Modular ASP.NET MVC
[by Bob Crowley](https://twitter.com/contrivedex)


[Orchard CMS](http://www.orchardproject.net/)

[Orchard CMS being rewritten ontop of MVC Core](https://github.com/OrchardCMS/OrchardCore)

[My Get Package - Orchard Core](https://www.myget.org/gallery/orchardcore-preview)

Build MVC Modules separate from the web app that's running them

### Solution Explorer
* ModulePayroll (just class library)
	* References
		* Microsoft.AspNetCore.MVC (v1.1.3)
		* Orchard.Core.AsModule
	* Content/ <-- static files
		* image.png 
			* reference with fully qualified path (including Module)
			* ~ refers to project home
	* Models/
		* Food.cs
	* Controller/
		* HomeController.cs
	* Views/
		* Home/
			* Index.cshtml (
	* Package.Build.props
* Main MVC App <-- startup this application
	* References
		* OrchardCore.Modules.MVC
	* Views/
		* Shared/
			* _Layout.cshtml
	* Startup.cs
		* `services.AddModules()`
		* `app.UseModules()`
	* tenants.json
		* Payroll
			* State
			* RequestUrlPrefix
			* Features
			* MyConnectionString

#### Convention

Module Name / Controller Name / Action Name
Area Name / Controller Name / Action Name

htpp://localhost:8000/ModulePayroll/Home/Index

New Project (Class Library)
Add Orchard CMS
Add Model/Views/Controller
Deliver as Nuget Package


## Why I Hate Your Responsive Website
[by Everett McKay](http://www.uxdesignedge.com/about/)

#### [Jakob's Law of the Internet User Experience](https://www.nngroup.com/articles/end-of-web-design/)

Users spend most of their time on other sites

Mobile Design ≠ Responsive Design

Responsive Design -> Layout
Great UX ≠ Layout

Responsive Design - squishing the stuff to fit on the screen

Windows Phone - shrunk down PC in your pocket :(
iPhone - Mobile First - well thought out mobile design :(

Can't do *everything* the same as desktop **VS.** deliver top mobile experiences quickly and efficiently

Optimizations - can't optimize for *everything* (we can optimize for *nothing* and that's what a lot of mobile sites do)

Same experience across devices - optimizing for **Nothing**

Who says mobile users and desktop users want different things - **Your Data Does**

[![University Website ](https://imgs.xkcd.com/comics/university_website.png)](https://xkcd.com/773/)


**Desktop** - research, planning, comparison shopping, paper output
**Mobile** - actually traveling, in route

Resulting User Experience should fit (not just content)

## How File Upload Features a Security Risk and What You Can Do About It
[by Brian Waters](https://twitter.com/int10h)

CTF
White / grey box security assessments Pentesting (with source code)

Security - **Educators** vs Advisors

### File Upload Features

Profile Images (image) / File Hosting (arbitrary files)

### Challenges

* Browsers are complicated
	* Languages / file formats
	* Built in script interpreter
	* nuanced security model
* Servers vary greatly
	* C, C++, JAVA, .NET, Python, Ruby, Node, Linux, Windows
* Desktop / Phone Targets

### Risks

* Phishing
* Account Takeover
* Code Execution in browser (XSS)
* Code Execution on client (RCE, drive by downloads)
* Code Execution on server (RCE)

XSS - Xross Site Scripting
RCE - Remote Code Execution

### Phishing - 

* exploits abuse of trust - files uploaded on website can abuse users trust in you
* ex. FCC file upload feature on fcc.gov domain


### Account takeover and XSS

* Combining low-severity vulnerabilities
* Cookies allow some cross-subdomain communication
	* Cookie `domain` attribute
* Same origin policy can be weakened
	* `document.domain` JavaScript object


### Example Site

www.example.com

* public login
	* https://www.example.com/user/int10h
* media.example.com
	* hosts user uploaded content
		* http://media.example.com/photo/asefsaefas/image.svg

```svg
<svg>
  <script>
   document.cookie="sid=4af400; domain=example.com"
  </script>
</svg>
```
```html
<meta http-equiv="set-cookie" content="sid=4af400; domain=example.com" />
```

**Idea**: Phishing Site - add filters and meta tags to your image

### Session fixation

* Many websites set a session cookie before login
* Sites should set a fresh session after login
* Sites that do not are vulnerable to session fixation

**IF** attack can set cookie before login **AND** website does not give you a fresh session **THEN** attacker knows your session cookie

### Mitigation

* Use a separate second-level domain
* Use Content Security Policy
* Use the `HttpOnly` attribute
* Sanitize uploads or whitelist content types
	* Blacklisting is insufficient
* Use `Content-Disposition:attachment` if applicable

### Other Attacks

* Inappropriate Content - Pornographic
* Privacy - filename / exif data (strip out)


### Exploiting Native Code (memory corruption)

* Can be used against servers or clients
* Various code may parse uploads or downloads
* Image Processing Libraries
	* [ImageMagic](https://www.imagemagick.org/script/index.php)
		* Re-encode file - newly generated jpeg
* Antivirus
	* Windows Defender

### Mitigation

* Keep software up-to-date
* Sandbox media-processing code
* process and store uploads on a separate machine


### Security Timeline

1. New Kernel
2. Zero Day - attacker finds out about vulnerability that is not publicly known
3. Vulnerability is publicly known
4. Vulnerability is patched

* If you don't patch, you're walking around with publicly known vulnerabilities
* Time between public knowledge and patch should be minimal

### Drive By Downloads

* Attacker hosts malicious content on your site
	* Malware
		* User must be tricked into opening content
	* Exploit
		* User need not engage

### WebShells

Self-contained backdoor in a single PHP/ASP/ASP.NET

![security](https://i.imgur.com/F0tO43P.png)

### Local File Include (LFI)

`include($_GET['page'].'php'`

* Requires attacker to find a suitable file to include
* If file allows you to upload to webroot (any executable directory)

Auto Fail for running unsupported 


### Directory Traversal

```http
Content-Disposition: filename="../root/webshell.php"
Content-Type: image/jpeg
```

### Mitigation

* Configure server not to execute uploaded content
	* Don't store uploads in webroot
* Don't trust user-provided filename
	* Rename, escape or sanitize
* Don't trust file extension or content type

### Extension Spoofing

* Attacker uploads a flash file with a .jpg extension
* Hosts an attack page on a separate domain

### Polyglots

* Possible to construct a file that is both valid JavaScript and valid JPEG
* Can be used to bypass some CSP JavaScript protections


* CSP
	* Don't execute inline javascript
	* Don't execute `<script>` tags from another domain

### Mitigation

* Always explicitly set the Content-Type header
* Use `x-Content-Type-Options: no sniff`
* Use Content Security Policy
* Use crossdomain.xml and clientaccesspolicy.xml
