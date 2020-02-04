---
title: Everything's a Function
tags: [.NET, VB.NET, Functions, EventHandler]
draft: true
---

<div><style>
body {
    color: green;
} 

</style></div>

<div><script>
$('head').append('<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />');
$('head').append('<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>');
</script></div>

<div>
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
</div>

In .NET many of the language features and framework constructs are just wrappers around functions.  In fact, you could write a perfectly acceptable application just using functions.  However, over time, certain design patterns emerge and gain enough popularity that they are incorporated into the framework to provide some core functionality and syntactic sugar.  But don't let that fool you... it's really just a function!

### Properties

Take a typical property for example:

```vb
Private _name As String
Public Property Name As String
    Get
        Return _name
    End Get
    Set(value As String)
        _name = value
    End Set
End Property
```

We could use functions to expose the same functionality:

```vb
Public Function Get_Name() As String
    Return _name
End Function

Public Sub Set_Name(value As String)
    _name = value
End Sub
```

In a property, whatever the equivalent of `Get_Name` is at the compiler level gets invoked anytime the Property is used. Alternatively, anytime the assignment operator is used on the property, it calls something like `Set_Name` and passes in the assignment expression as the value parameter.

Interestingly, if you try to have both the functions and the property in your code base at the same time, you will get the error:

> property 'Name' implicitly defines 'get_Name'

because `Public Property Name` actually unwraps into a method named `Get_Name`

### Events

Whats even cooler is that events are really just a series of function calls that make callbacks easy to register with a central handler.  

Here's how a typical event works:

```vb
'declare a custom event
Event NameAdd()

'add handler for the event
Public Sub NameAdded() Handles Me.NameAdd
    MsgBox("You Added A Name")
End Sub
```

The `Handles` keyword is unique to VB.NET. It's really just a short hand for manually attaching a listener to the event.  It is equivalent to writing this:

```vb
Private Sub Form1_Load(sender As System.Object, e As System.EventArgs) Handles MyBase.Load
    AddHandler Me.NameAdd, AddressOf NameAdded
End Sub
```

The compiler will find all the Handles keywords and add a method to add them and remove them when the form is created and destroyed.

So how could we do this whole thing with just **functions**?

Here's a simple module titled `CustomEvents`.  It contains a dictionary which will hold a mapping of event names and callbacks to execute when the event is raised.  
The `AddHandler` method just takes an event name and callback and adds the key value pair to the dictionary.  At this point, it's the same as saying I don't know if anything will raise this event or not, but if it does, could you please execute this function when it does.  You could add any number of events and callbacks here.  
Finally, the `RaiseEvent` method just takes in the name of the event.  In this case it will just find the first item in the dictionary that has the same eventName, which will return an action and then it will immediately execute that action.  A more sophisticated example would check to make sure the event existed before calling the action and also allow the same event to be registered to multiple callbacks.

```vb
Module CustomEvents

    Public Property EventHandlers As New Dictionary(Of String, Action)

    Public Sub [AddHandler](ByVal eventName As String, callback As Action)
        EventHandlers.Add(eventName, callback)
    End Sub

    Public Sub [RaiseEvent](ByVal eventName As String)
        EventHandlers.Item(eventName)()
    End Sub

End Module
```

So how do we use this?

Let's compare to our original long hand for registering events.  First we added a handler, and then we can raise the event like this:

```vb
AddHandler NameAdd, AddressOf NameAdded
RaiseEvent NameAdd()
```

Compare that to our own implementation. Because both of our method names are protected, we have to escape them with square brackets, but other than that, this looks very similar.

```vb
[AddHandler]("NameAdd", Sub() NameAdded())
[RaiseEvent]("NameAdd")
```

So that's a very naive implementation of Event Handlers using methods, but you should get a feel for how they work. 

### Wrap Up
It's important to note here that I'm not advocating for replacing any of these language features with methods.  These wrappers exist for a very important reason.  They make the code more beautiful, and readable, and abstract away some of the boilerplate plumbing you'd need to do to hook everything up.  But I still think it's interesting to know a little bit about whats going on behind the scenes and why these language features are important and what they're doing.  If you find yourself in a language that doesn't support properties or events, you might have a better understanding about how to roll your own if neccessary.
