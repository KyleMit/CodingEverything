---
title: Basic Authentication Security
tags: ['post', 'authentication']
draft: true
---

In deploying web applications, you have a couple options for authenticating your users as seen here in [IIS][IIS Auth]:

![IIS Auth](https://i.imgur.com/B5XTQM4.png)

[IIS Auth]: https://technet.microsoft.com/en-us/library/cc733010.aspx "Internet Information Services"

Basic authentication works in the following steps:

![Basic Auth](https://i.imgur.com/Xucx6eC.png) 

1. An un-authenticated user requests resources
2. Server requires authentication to view resources so returns a "401 Challenge" to the browser.  The HTTP Response header will contain something like this:

    ```
    WWW-Authenticate: Basic realm="Protected"
    ```

3. The browser prompts the user for their username and password and stores them internally. 
4. The browser reissues the original request along with the stored credentials (encoded in base64)

    ```
    Authorization: Basic dG9tY2F0OnMzY3JIdA==
    ```
    
5. The server authenticates the passed in credentials against the local computer / network.  Once authenticated, the browser returns the requested resource.This approach requires that the end user have an account within the server's user accounts or network.
6. On subsequent requests the browser continues to pass the saved user credentials until the browser is closed and discards the login info.

Once authenticated, the web application may also initialize some session state for the user in order to cache or persist high level information.

When it comes to **timing out** a user, it's important to note which elements we can control from the server and those we cannot:

**Client** - controls credentials
**Server** - controls session

On the server side you can set the [session timeout](https://www.iis.net/configreference/system.webserver/asp/session), 

```xml
<system.web>
   <sessionState mode="InProc" cookieless="false" timeout="25" />
```

The architectural design for most web applications is state

It's nice having the client and server both have their own responsibilities, but it leads to some wonky results.  By default, if the session times out on the server, the client is none the wiser.  Unless you have a 


#### [RFC7235 - 6.2  Authentication Credentials and Idle Clients](https://tools.ietf.org/html/rfc7235#section-6.2) (previously [RFC2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec15.html#sec15.6))

>Existing HTTP clients and user agents typically retain authentication information indefinitely.  HTTP does not provide a mechanism for the origin server to direct clients to discard these cached credentials, since the protocol has no awareness of how credentials are obtained or managed by the user agent.  The mechanisms for expiring or revoking credentials can be specified as part of an authentication scheme definition.

>Circumstances under which credential caching can interfere with the application's security model include but are not limited to:

> * Clients that have been idle for an extended period, following which the server might wish to cause the client to re-prompt the user for credentials.

> * Applications that include a session termination indication (such as a "logout" or "commit" button on a page) after which the server side of the application "knows" that there is no further reason for the client to retain the credentials.

> User agents that cache credentials are encouraged to provide a readily accessible mechanism for discarding cached credentials under user control.


> [HTTP Authentication: Basic and Digest Access Authentication](https://tools.ietf.org/html/rfc2617)

**Stack Overflow Questions**:

* [How to log out user from web site using BASIC authentication?](http://stackoverflow.com/q/233507/1366033)
* [How to clear basic authentication details in chrome](http://stackoverflow.com/q/5957822/1366033)
* [http basic authentication “log out”](http://stackoverflow.com/q/4163122/1366033)
* [How to logout user for basic HTTP authentication](http://stackoverflow.com/q/4154187/1366033)
* [REST services basic auth session timeout](http://stackoverflow.com/q/14317141/1366033)
* [Firefox quickly forget HTTP Basic Auth](http://superuser.com/q/181547/180163)

**Articles**:

* [Setting timeout for basic authentication](https://bytes.com/topic/c-sharp/answers/258357-setting-timeout-basic-authentication)
* [Switch to basic authentication](https://forums.iis.net/t/1196219.aspx)
* [IIS authentication user timeout](https://forums.iis.net/t/1152529.aspx)
* [Basic Auth log-out with JavaScript](http://tuhrig.de/basic-auth-log-out-with-javascript/)
* [Session timeout in Basic Authentication](https://www.ca.com/us/services-support/ca-support/ca-support-online/knowledge-base-articles.tec529714.html)
* [Saving HTTP Authentication?](https://fishbowl.pastiche.org/2003/12/30/saving_http_authentication/)

**Basics**:

* [What is the difference between "basic auth" and "form-based auth"?](https://kb.globalscape.com/KnowledgebaseArticle10691.aspx)
* [Compare and contrast the authentication types (BASIC, DIGEST, FORM, and CLIENT-CERT)](http://java.boot.by/wcd-guide/ch05s03.html)
* [Understanding IIS 7.0 Authentication](http://windowsitpro.com/systems-management/understanding-iis-70-authentication)
