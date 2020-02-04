---
title: Always use IE=Edge
tags: [post, "x-browser"]
draft: true
---

This was originally going to be a post about Twitter Bootstrap styles behaving oddly in IE and how to fix them.  But the necessary changes wound up living in the *web.config*, not *site.css*. 

#### The Problematic Rendering

![IE=IE7](https://i.imgur.com/fBXs89Y.png)

#### The Ideal Rendering

![IE=Edge](https://i.imgur.com/GWb4qYe.png)

The problem was that, despite conforming to HTML5 standards, IE was defaulting to IE7 compatibility mode, making most standard styles render poorly.

![Change IE Mode](https://i.imgur.com/HzDDd6W.png)

This has been something that has challenged a lot of our development, and asking the client to open up the dev tools and change it manually is like asking a person who purchased a car from a dealership to simply open up the hood and add the engine before being able to drive it off the lot.

So we need to somehow the deliver the client a page that will tell their browser to use the best possible rendering.  

We can do this with HTML or HTTP headers, but HTTP will be much more robust, so we'll start there.

Like almost any of my blog posts, there's also a good [stack overflow post on setting stopping compatibility mode][SO1], but I wanted to go into a little more detail than is appropriate there.

To change the HTTP headers, we want to modify the [`<HttpProtocol>`][httpProtocol] header in the web.config used by IIS.

It should eventually look like this:

```xml
<system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="X-UA-Compatible" value="IE=Edge" />
      </customHeaders>
    </httpProtocol>
</system.webServer>
```

You can add that directly to your web.config, or have IIS add it for you. Go to the **HTTP Response** section for your page in IIS

![HTTP Response](https://i.imgur.com/Qn8YKCw.png)

Then add the following response header:
The name should be `X-UA-Compatibility`.  
The value should be `IE=Edge` or anything from this [list of IE Compatability Values][X-UA-Compatibility]

[X-UA-Compatibility]: http://msdn.microsoft.com/en-us/library/ff955275(v=vs.85).aspx

![HTTP Response Value](https://i.imgur.com/byT7Wt3.png)

If you needed to set this at a page level, you could do so with a `Meta` Tag in the `Head` element, but there are a lot more stipulations and concerns. Regardless, if you're interested, here's an article about [How to set the X-UA-Compatible Meta Attribute][X-UA-Compatible Meta].



[album]: http://imgur.com/a/j9MVY
[SO1]: http://stackoverflow.com/q/6156639/1366033
[httpProtocol]: http://www.iis.net/configreference/system.webserver/httpprotocol
[X-UA-Compatibility]: http://msdn.microsoft.com/en-us/library/ff955275(v=vs.85).aspx
[X-UA-Compatible Meta]: https://www.modern.ie/en-us/performance/how-to-use-x-ua-compatible
