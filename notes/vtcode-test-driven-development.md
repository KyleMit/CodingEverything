---
title: Test Driven Development
date: 2016-04-11
---

http://www.meetup.com/VTCode/events/228782642/

Rob Hale 
@[Renewable NRG](http://www.renewablenrgsystems.com/)

[Michael Feathers - Working Effectively with Legacy Code](http://www.amazon.com/dp/B005OYHF0A/)

Mocking Framework
https://github.com/moq/moq
http://www.moqthis.com/


* Automated testing isn't always TDD

* **Unit**
	* Component boundary
	* single function
	* operates in isolation
		* independent of all over tests


* Benefits of Unit > End-to-end
	* Error localization
	* Execution Time
	* Tighter feedback loop
	* Coverage
		* Automate analysis with CI / build framework

> Maintenance fixes and “small” code changes may be nearly 40 times more error prone than new development 
> [Realizing quality improvement through test driven development: results and experiences of four industrial teams](http://research.microsoft.com/en-us/groups/ese/nagappan_tdd.pdf)
 - Humphrey WS (1989) Managing the software process. Addison-Wesley, Reading, MA

* What is a Unit Test?
	* doesn't talk to the database
	* doesn't communicate across a network
	* means that you need to stub or mock the layers

* **Difficult** scenarios to Unit Test
	* UI/GUI interaction
	* Out-of-process call
	* Client-server architecture
	* Closed Object Models
		* Sharepoint / Silverlight
	* Legacy Code

* TDD lifecycle (red, green, refactor)
	* Write a failing test
	* Make the test pass
		* using minimal neccessary code - this is a test for the test - if we see green, we know the test is working
	* Refactor

* Long lifecycle
	* New requirement
	* Write new Test
	* Make it Fail
	* Write New Code
	* Run Tests (Make it Work)
	* Refactor
	* Run Tests (Make it Better)


* Goal isn't 100% coverage - goal isn't 0%
* Every developer does "unit testing" - not always "automated"

> When you first start at doing TDD you "know" what the design should be.  You "know" what code you want to write.  So you write a test that will let you write that bit of code.
> When you do this you aren't really doing TDD - since you are writing the code first (even if the code is only in your head)
> It takes some time to (and some poking by clever folk) to realize that you need to focus on the test.  Write the test for the behavior you want - then write the minimal code needed to make it pass - then let the design emerge through refactoring.  Repeat until done.
> [Brian Rasmussen on TDD](http://www.slideshare.net/baronslideshare/testdriven-development-tdd)


* Mob Programming
  * Applicant
  * Eligibility

* NUnit
	* TestFixture
	* Test

* Test Naming Conventions
	* BDD
	* Action_Result

* Triple A
	* Arrange
	* Act
	* Assert


* Principles
	* Don't go to be dred
	* Continuous Small changes

Property Based Testing (Quick Check / Fuzzing)
http://thinkrelevance.com/blog/2013/11/26/better-than-unit-tests
http://blog.jessitron.com/2013/04/property-based-testing-what-is-it.html
https://gist.github.com/npryce/4147916
.NET - FS Check - https://fscheck.github.io/FsCheck/
QuickCheck - https://pypi.python.org/pypi/pytest-quickcheck/

* Legacy Code - Break Up Big Bohemeths
  * Tests that check outcomes of big methods to make sure they're the same
  * [Approval Tests with Llewellyn Falco](http://approvaltests.com/)


* Mock Objects
	* Dummy objects - do nothing - just satisfy requirement
	* Stub - Canned answers
	* Mock - Preprogramed objects that allow you to meet expectations


* Chicago vs London school
	* Chicago - state - did you get the wright number
	* London - interaction - did the right method get called

```js
ledger.Calculate(5*7)
```

Resources

Roy Osherove - The Art of Unit Testing
Machine Specifications (BDD Syntax)
