---
title: ASP.NET Client Side Session Warning / Timeout
tags: ['post', asp.net, session]
draft: true
---


Our objective is to timeout and redirect any open sensitive client side windows to coincide with the end of that user's session on the server as well.  Ideally, this should give the user a brief warning to take action before immediately redirecting.  This article explores some of the goals, challenges, constraints, and solutions to elegantly implementing this design feature.

If we ask the server how long left on the session, that call counts as refreshing the session - so we'll always get the full `SessionTimeout`

So we have to send that information ahead of time and start a separate countdown on the client.

Our client side timer on each page will need to restart anytime we roundtrip to the server and extend the session.  This needs to include minimally full page calls, but also AJAX calls within the page, and also requests made to the same session in other tabs.  All of which will need to be updated on each instance on the client across all tabs.

So we need to a) return the session timeout start time with each and every response from the server - and we need to b) share that value across all open tabs.

a) Ways to return information from the server
 * HTTP Header values
 * HTML contents in Head or Body
 * Set Cookies 
 
b) Ways to share state across tabs
 * Calls to Web App / Session
 * Calls to 3rd Party Storage
 * LocalStorage
 * Cookies
 
If we store the last server access time inside of a cookie, the benefit is that information can be added to every single response and automatically stored inside of the cookies for that site and also accessed across all instances of the application.  The only downside is cookies are also used to pass information *to* the server on every single request, which is unhelpful in our case, but not an overwhelming overhead to bear for the simplicity of getting shared session state across tabs without much manual plumbing.

Add the last access time like this:

```cs
// global.asax.cs
void Application_PostRequestHandlerExecute(object send, EventArgs e)
{
    // add cookies to every response
    var cookie = new HttpCookie("last-response-time");
    cookie.Value = DateTime.Now.ToString(CultureInfo.CurrentCulture);
    cookie.Expires = DateTime.MinValue;
    HttpContext.Current.Response.Cookies.Add(cookie);
}
```

Then on the client we can get the session timeout by converting the last access time into a date, and adding the session duration

```
// timeout constants
var sessionLengthSec = 20 * 60;
var sessionLengthMs = sessionLengthSec * 1000;
var cookieName = 'last-response-time';
var sessionCookie = getCookie(cookieName);
var sessionDate = new Date(sessionCookie);
var sessionTimeoutMs = sessionDate.getTime() + sessionLengthMs;
var remainingMs = sessionTimeoutMs - Date.now();
var remainingSec = remainingMs / 1000;
```
    
Where [get cookie is implemented like this](https://stackoverflow.com/a/24103596/1366033):

```js
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
```
