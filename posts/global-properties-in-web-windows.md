---
title: Using Shared Properties in ASP.NET and WinForms
tags: [post, ASP.NET, WebForms, "Global Variables", Session]
date: 2014-05-15
postID: 3863829816186775668
---

A good business library should be able to drive behavior on any number of devices, exposing a application programming interface that is agnostic of its implementation.

However, we recently had a problem when we wanted to re-use a business library that was designed for a Windows Forms application for use in an ASP.NET web application.  The problem was that our original application used shared properties to manage the state of the application.

>**Note**: it seems prudent to [avoid global variables][GlobalVariablesAreBad], but this was where we found ourselves.

**Why was this a problem?** The original design meant that each instance of the application was owned by a single user under a single process.  *However*, in ASP.NET, all users share a single process hosted by the ASP.NET runtime.  Since shared variables are unique to the process they live on, variables that managed state for a single user (i.e. `ActiveClient`) would now be shared, overwritten, and cleared all at once by every single user within the web application.

Without massive re-writing of the business and application logic, we needed a way to give windows app users their own global variables as well as giving web app users a way to access their own *instance* of the *shared* properties.

### Here's how we did it

First, consider what a normal shared property would look like in VB.NET:

```vb
Private Shared _activeClient As Client
Public Shared Property ActiveClient() As Client
    Get
        Return _activeClient
    End Get
    Set(ByVal value As Client)
        _activeClient = Value
    End Set
End Property
```

>**Note**: For this example, I have a class named `Client` but this could be any variable that I wanted to share access to across the entire application for a single user.

It's important to breakdown all the things that a property does here.  The property doesn't actually hold the value across all instances; the private shared field does.  The property just provides global accessors and setters to retrieve and set the value.

#### ASP.NET Session Variables

In ASP.NET, we can store values unique to each user inside of the [Session Variable][Session Variable].  To figure out how to integrate this with the first case, let's consider what a typical session variable looks like:

```vb
'setter
Session("ActiveClient") = new Client()
'getter
Dim myClient = DirectCast(Session("ActiveClient"), Client)
```

This works well enough, but it's a little messy.  We have to manually perform casting ourselves and also keep track of all the key strings across the entire application.

Here's one way to improve this (and other projects) by adding [strong typing to the ASP.NET session variable][strong typing]:

```vb
Public Shared Property ActiveClient() As Client
    Get
        If HttpContext.Current.Session("ActiveClient") Is Nothing Then
            HttpContext.Current.Session("ActiveClient") = New Client
        End If
        Return DirectCast(HttpContext.Current.Session("ActiveClient"), Client)
    End Get
    Set(value As Client)
        HttpContext.Current.Session("ActiveClient") = value
    End Set
End Property
```

We still have global accessors and setters provided by the shared property, but inside of the `Get` and `Set` operations we're using the session variable to store the value for each individual user.  Note that we're using the *static* [`HttpContext.Current` Property][HttpContext.Current] so the code doesn't not have to live on a page with it's own HttpContext.

### Merging Both Properties

We now have a property in a windows application that stores a value unique to each user / process and a property in a web application that stores a value unique to each user / session.  All that is left to do is to merge the properties accordingly.

The first step in doing so is to determine whether or not the assembly is currently executing as a web or windows application. We can do so by checking if the HttpContext Current property exists:

```vb
Dim isWebDeployed as Boolean = System.Web.HttpContext.Current IsNot Nothing
```

Using that information, we can just expand the logic in our getters and setters to first check the execution environment and then grab the appropriate value:

```vb
Private Shared _activeClient As New Client
Public Shared Property ActiveClient() As Client
    Get
        'check if deployed as web application
        If System.Web.HttpContext.Current IsNot Nothing Then
            'if we've never loaded, create new instance just for session
            If System.Web.HttpContext.Current.Session("ActiveClient") Is Nothing Then
                System.Web.HttpContext.Current.Session("ActiveClient") = New Client
            End If
            Return DirectCast(System.Web.HttpContext.Current.Session("ActiveClient"), Client)
        Else
            'application is windows application
            Return _activeClient
        End If
    End Get
    Set(ByVal value As Client)
        'check if deployed as web application
        If System.Web.HttpContext.Current IsNot Nothing Then
            System.Web.HttpContext.Current.Session("ActiveClient") = Value
        Else
            _activeClient = Value
        End If
    End Set
End Property
```

### Extended Solution

Based off the number of instances you're dealing with, the previous solution might work just fine.  However, if you need to repeat this across multiple shared properties, you might want something a little more reusable.

Here's a **generic getter method** that takes in the shared private field for a windows application and the key string for a web application and returns the appropriate value:

```vb
Public Shared Function GetPropertyBasedOnEnvironment(Of T)(ByRef sharedMember As T, ByVal propName As String) As T
    'check if deployed as web application
    If HttpContext.Current IsNot Nothing Then
        'application is web application
        Return TryCast(HttpContext.Current.Session(propName), T)
    Else
        'application is windows application
        Return sharedMember
    End If
End Function
```

Conversely, here's **generic setter method** that can access the old value and assign it a new value depending on the current environment:

```vb
Public Shared Sub SetPropertyBasedOnEnvironment(Of T)(ByRef sharedMember As T, ByVal propName As String, newValue As T)
    'check if deployed as web application
    If HttpContext.Current IsNot Nothing Then
        'application is web application
        HttpContext.Current.Session(propName) = newValue
    Else
        'application is windows application
        sharedMember = newValue
    End If
End Sub
```

With those two methods accessible, we can now simplify our shared property using the following code:

```vb
Private Shared _activeClient As New Client
Public Shared Property ActiveClient() As Client
    Get
        Return GetPropertyBasedOnEnvironment(_activeClient, "ActiveClient")
    End Get
    Set(value As Client)
        SetPropertyBasedOnEnvironment(_activeClient, "ActiveClient", value)
    End Set
End Property
```

**Bonus**: if you're using .NET 4.5 or above, you can further simplify the custom getter and setter methods by using [`CallerMemberNameAttribute`][CallerMemberNameAttribute] to have the compiler pass the key string for you, like this:

```vb
Public Shared Function GetPropertyBasedOnEnvironment(Of T)(
                  ByRef sharedMember As T,
                  <CallerMemberName> Optional propName As String = Nothing) As T
    'check if deployed as web application
    If HttpContext.Current IsNot Nothing Then
        Return DirectCast(HttpContext.Current.Session(propName), T)
    Else
        Return sharedMember
    End If
End Function
```

Again, there might be more elegant architectural solutions, but this helped resolve the issue we were having based on the situation we had coded ourselves into.


[GlobalVariablesAreBad]: http://c2.com/cgi/wiki?GlobalVariablesAreBad
[Session Variable]: http://msdn.microsoft.com/en-us/library/vstudio/ms178581.aspx
[strong typing]: http://weblogs.asp.net/cstewart/archive/2008/01/09/strongly-typed-session-in-asp-net.aspx
[HttpContext.Current]: http://msdn.microsoft.com/en-us/library/system.web.httpcontext.current.aspx
[CallerMemberNameAttribute]: http://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.callermembernameattribute.aspx
