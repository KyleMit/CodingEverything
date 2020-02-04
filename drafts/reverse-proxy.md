---
title: Reverse Proxy with URL Rewrite
tags: ['post', iis]
draft: true
---

URL Rewrite is the perfect vehicle for setting up a Reverse Proxy on a Microsoft stack.  A [reverse proxy][rp] is a way to route web traffic through a single entry point which acts a traffic cop to pull the actual resources once inside your network.  

Here's a network diagram of how a reverse proxy typically works within a network:

![Reverse Proxy Network Diagram](https://i.imgur.com/TT4k9W0.png)

If you want more info, here's a great explanation of [the difference between a proxy server and reverse proxy server][1]

![Inbound Rules](https://i.imgur.com/ydpZ4v5.png)

![Outbound Rules](https://i.imgur.com/PpcAnJv.png)

[rp]: https://en.wikipedia.org/wiki/Reverse_proxy
[1]: http://stackoverflow.com/a/366212/1366033

Proxy Info

http://stackoverflow.com/questions/4243959/iis-reverse-proxy-with-rewrites-cant-handle-a-redirect-from-the-server-we-proxy
http://stackoverflow.com/questions/23508938/url-rewrite-keeps-original-host-location-when-reverse-proxy-301-redirects

#Answer

-------------------------------------------------------
Let's take a step back and look at how HTTP redirects work and then a couple ways that IIS tries to handle them.

### HTTP Request/Response



When you navigate to a URL, the browser is submitting a request that the destination server can fulfill however it wants.  

Although you only interact with the URL, the request includes a lot of other information sent along as headers.  If you want to see the full HTTP request, open up a tool like [fiddler][1] or go to the network tab in the [DevTools][2] of your favorite browser.

For example, if you navigate to the following address:

http://stackoverflow.com/questions/4243959/iis-reverse-proxy-with-rewrites-cant-handle-a-redirect-from-the-server-we-proxy

The resulting GET request actually looks like this:

![GET Request][3]

Minimally, the browser has parsed the [URI][4] into the **Host** And **Path** components.  Also, based on how and where the browser it set up, it'll tack on a lot of extra instructions that the server might care about, for example - if you've installed the browser 


### Normal Redirect

http://stackoverflow.com/q/4243959/


  [1]: http://www.telerik.com/fiddler
  [2]: https://developer.chrome.com/devtools#improving-network-performance
  [3]: http://i.stack.imgur.com/mzeoS.png
  [4]: https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
  
-------------------------------------------



## Links
A reverse proxy with IIS and URL Rewrite
http://blog.cellenza.com/archi-patterns-bp/reverse-proxy-iis-url-rewrite/

Application Request Routing – Part 2(Reverse Proxy and Troubleshooting ARR, URLRewrite Issues)
https://blogs.msdn.microsoft.com/chiranth/2014/08/03/application-request-routing-part-2reverse-proxy-and-troubleshooting-arr-urlrewrite-issues/

Application Request Routing
http://www.iis.net/downloads/microsoft/application-request-routing

Using Rewrite Maps in URL Rewrite Module
http://www.iis.net/learn/extensions/url-rewrite-module/using-rewrite-maps-in-url-rewrite-module

URL Rewrite Module 2.0 Configuration Reference
http://www.iis.net/learn/extensions/url-rewrite-module/url-rewrite-module-20-configuration-reference

```xml
<outboundRules>
    <!-- This rule changes the domain in the HTTP location header for redirection responses -->
    <rule name="Change Location Header">
        <match serverVariable="RESPONSE_LOCATION" pattern="^http://[^/]+/(.*)" />
        <conditions>
            <add input="{RESPONSE_STATUS}" pattern="^301" />
        </conditions>
        <action type="Rewrite" value="http://{HTTP_HOST}/{R:1}"/>
    </rule>
</outboundRules>
```

Modifying HTTP Response Headers
http://www.iis.net/learn/extensions/url-rewrite-module/modifying-http-response-headers

HTTP Status Codes
http://www.restapitutorial.com/httpstatuscodes.html

Http Location Header Field
https://en.wikipedia.org/wiki/HTTP_location

URL Redirection
https://en.wikipedia.org/wiki/URL_redirection

URI
https://en.wikipedia.org/wiki/Uniform_Resource_Identifier


ARR Redirect 302 response location with incorrect url
https://forums.iis.net/t/1183012.aspx

ARR 2.0 response headers for a 302 Response are getting changed in reverse proxy.
http://forums.iis.net/t/1171047.aspx

What does the ARR setting "Reverse rewrite host in response headers" do?
https://forums.iis.net/t/1181299.aspx

URL Rewrite vs. Redirect; What’s the difference?
http://weblogs.asp.net/owscott/rewrite-vs-redirect-what-s-the-difference

Difference between proxy server and reverse proxy server
http://stackoverflow.com/questions/224664/difference-between-proxy-server-and-reverse-proxy-server
