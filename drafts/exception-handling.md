---
title: Exception Handling Best Practices
tags: [post, dotnet, best-practices]
draft: true
---

<div><style>
    pre.prettyprint code .dimmed{
        opacity: .5; /* Good browsers */
        -moz-opacity: 0.5; /* Netscape */
        -khtml-opacity: 0.5; /* Safari 1.x */
        filter: alpha(opacity=50); /* IE 5-7 */
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; /* IE 8 */
    }
</style></div>

Here's an overview of some exception handling practices that I've found helpful to work with:

### Best Practices:

* Only the Interface Layer code should display errors to the User
* Only the Interface Layer code needs to log exceptions (*since they have to bubble up there eventually*)
* Log all exceptions thrown and **review the logs**
* Enable Global error handling
* Don't display technical information to the user
* If you're not checking for a special condition, there's no need to wrap all code in a `Try...Catch` Block

#### Here are some do's and don'ts, but first the don'ts:

### Don'ts:

#### Empty Exception Handling
The following code does **nothing**. An exception was already thrown.  The code pauses to look at it and then sends it off on it's way to do exactly what it was doing in the first place.  If you don't have any special code you need to put here like extra messages or checking for special exceptions, there's no need for this here.  It just distracts from your `some code in here` section, which now has even less real estate.
```
Try
    'Some Code In Here
Catch ex As Exception
    Throw
End Try
```

#### Pokémon Exception Handling
So named because your code *Gotta Catch Em' All* (from [New Programming Jargon][pokemon]).  Very rarely is this the right approach. *Sometimes* this can be helpful, but it's certainly a code smell that something is not happening quite right if this has to be the case.   You're losing information and nobody is doing anything about it.  You should probably at least be logging when this occurs so it's visible somewhere.  Perhaps try to check for whatever condition is likely to cause the exception first without having to incur the performance cost of unwinding the stack and gathering metadata.
```
Try
    'Some Code In Here
Catch ex As Exception
    'Caught Em'
End Try
```

#### Lossy Exception Handling
ReSharper will actually warn you on this one with [`Excep­tion rethrow pos­si­bly intended`][PossibleIntendedRethrow].  A rethrow occurs when the catch block grabs a an exception and then **re** throws it again from that location.  The issue occurs because when you rethrow an exception, it **replaces** the stack trace of the original exception, hiding the original bit of code that actually caused the error. It's not gone for ever; it does become part of the inner exception.  But unless there is some good reason for moving the error details into layers of inner exceptions, then it seems better to just keep it simple and pass along the original exception.
```
Try
    'Some Code In Here
Catch ex As Exception
    Throw ex
End Try
```

#### Redundant Stack Traces
The first problem with this code is the same as the one above.  By creating a new exception and rethrowing it, we've obfuscated our original stack trace. The second, is this code needlessly repeats information that would already be available to a developer with proper logging.  The stack will tell you exactly where an error occurred in every single method that was called.  If the only additional information you can provide is the name of the method where the error occurred, then it won't be of much help to a developer.  
If the intention is to create a prettier message to display to the user, you have to wonder how much the user should be expected to read and understand method names WrittenInPascalCase. Is it really helpful to the user to know that the error occurred in `FooBar`?  Additionally, there are also cleaner ways to pass along info to the user as I'll discuss below.

```
Public Sub FooBar
    Try
        'Some Code In Here
    Catch ex As Exception
        Throw New Exception("Error in FooBar", ex)
    End Try
End Sub
```

#### Handling Flow

>Exceptions should be exceptional!

I prefer not to use exceptions to handle code flow.  It reminds me of the problems of `GOTO` statements, especially if there is some distance between the code which potentially throws the exception and the catch block. Whenever possible, it seems better to check for the condition that could potentially throw an exception and act based on that.  

I could throw in some justification about the performance cost of unwinding the stack for every caught exception, but the reality is that you'll only incur this penalty in the alternate flow scenario, and you'll *always* take a performance hit by checking for the exception producing condition.  Depending on how often the code is executed, the cost of checking the condition ahead of time, and how likely an exception is to occur, the performance benefits may be positive, trivial, or negative.

But I think the real selling point is readability.  It's apparent that you're hunting for a special condition and taking action based on that. Compare the following two sections.  In the first, you'd have to be familiar enough with the `GetValue` API to know that it will return an `InvalidOperationException` if it cannot find the provided key.  There is a little more guess work in figuring out what the last developer did when writing this method.  I think the rewritten method is cleaner: if have the code, return it, otherwise give em' the default.


##### Handling Flow With Exceptions :(
```
Public Function GetConfigCode(codeName As String, defaultValue as String) As String
    Dim appSettings As New AppSettingsReader
    Try
        Dim code = appSettings.GetValue(codeName, GetType(String))
        Return code
    Catch ex As InvalidOperationException
        Return defaultValue
    End Try
End Function
```
##### Handling Flow With Code :)
```
Public Function GetConfigCode(codeName As String, defaultValue as String) As String
    Return If(ConfigurationManager.AppSettings.AllKeys.Contains(codeName),
              ConfigurationManager.AppSettings(codeName), 
              defaultValue)
End Function
```

Another benefit is that you won't be confused by unnecessary exceptions. I'm a big fan of breaking whenever a CLR exception is thrown. (Open the Exceptions dialog with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>E</kbd> and make sure 'Thrown' is checked for CLR Exceptions):

![Exceptions Dialog](https://i.imgur.com/FHW7Q4m.png)

If you have code that regularly handles exceptions, then every time this code executes, it will pause execution: 

![Exception](https://i.imgur.com/zJt3lao.png)



#### Manual Garbage Collection
While we're on `Try...Catch...Finally` blocks, you no longer need to set the value of objects scoped to your method to `Nothing` before exiting the method.  This is a callback to VB6 days before .NET had the Garbage Collection (GC) capacities it does today.  If you declare a local variable within your method, it is unable to be reached by *any* code as soon as you've exited the method.  You might want to make sure it's not lingering around for memory reasons, but GC will take care of this automatically for you.  In fact, setting the value to nothing doesn't even immediately remove the variable from memory; it just tells GC that the next time it has a chance, it can clear out the variable.  Since this already would have happened, we don't need to manually clear out objects.  
<pre class="prettyprint"><code class="vbnet">Public Sub FooBar
    Try
        Dim dt as DataTable
    Catch ex As Exception
        Throw 
    Finally
        <span class="dimmed">dt = Nothing</span>
    End Try
End Sub

'does the same thing as this
Public Sub FooBar
    Dim dt as DataTable
End Sub
</code></pre>

Note that we might have other reasons beside memory footprint for wanting to get rid of an object.  A `SqlCommand`, for example, might leave open a connection that would remain open until GC had a chance to destroy the object.  In that case, we would want to ensure that we properly dispose of that object as soon as we're done with it.  A friendly syntax for doing this is to write a [**`Using`** statment][using] on any object that implements the [`IDisposable`][IDisposable] Interface.  This automatically calls `Dispose` on the object as soon as it is out of scope of the statement. This means that your connection is closed much sooner than having to wait until the finally block is called, or that you have don't have to repeat the dispose call in the catch block in case an exception was thrown while using the object.
```vb
'The following Using Block:
Public Sub AddPerson(ByVal clientId As Integer)
    Using cmd As SqlCommand = GetCommand()
        cmd.CommandText = "INSERT INTO Person VALUES(" & clientId & ")"
        cmd.ExecuteReader()
    End Using
End Sub

'Will compile into this:
Public Sub AddPerson(ByVal clientId As Integer)
    Dim cmd As SqlCommand
    Try
        cmd = GetCommand()
        cmd.CommandText = "INSERT INTO Person VALUES(" & clientId & ")"
        cmd.ExecuteReader()
        cmd.Dispose()
        
    Catch ex as Exception
        If cmd IsNot Nothing Then
           cmd.Dispose()
        End If
        
        Throw    
    End Try
End Sub
```

### Do's
Here's some code to put together to handle exceptions well across all applications:

#### Store User Messages Separately
Exceptions expose a [`Data`][exception.data] Property that implements [`IDictionary`][IDictionary].  It is intentionally put there so you can easily store and retrieve useful bits of information so you don't have to stuff everything into the error message, or stack trace, or (*gasp*) global variables.  
Using this, we can add useful information directly to the exception object.  You can read more at [How can I add a message to an exception without losing any information?][AddExceptionMessage]


```vb
Try
    'Some Code In Here
Catch ex As Exception
    ex.Data("UserMessage") &= "There was a problem initializing..."
    Throw
End Try
```

Then, when you handle the error, you can display the relevant information to the user like this:

```vb
If ex.Data.Contains("UserMessage") Then
    MessageBox.Show(ex.Data("UserMessage").ToString)
Else
    MessageBox.Show(ex.Message)
End If
```
Since you should always show the user *something* if the application has thrown an error, the worst case scenario in the code above is that you haven't defined a custom `"UserMessage"` and the user will see a standard error message.  As you start cleaning up your code base and adding UserMessages to exceptions, your users will see more and more nice messages.  Don't try to point out the same level of detail that you would want for debugging the application.  That's what logging is for.  Instead, you want to say just enough to let the user know there was an error.  They don't care which layer of your application had an issue.  It's sufficient to say "*There was a problem saving the information*" or "*There was an error generating the report*".  

#### Log Inner Exceptions

Sure it can sometimes be a lot of garbage and white noise.  But more information is always better when trying to diagnose a tricky error.  It can give you something to Google or can make you aware of processes that you didn't know where happening.  If you don't log it, you won't know it's there (at least from merely looking at the logs).

```vb
'TODO Recursive exception handeling
```
http://stackoverflow.com/questions/1456563/best-way-to-check-for-inner-exception

#### Enable Global Error Handling

Make sure that you have seen every error that has come through your application.  It's all too easy to add some UI level code that handles an event and forgets to implement it's own error handling.  This creates two problems if there's an error in that code:

1. It's hard to track down because you can't log what you don't know about
2. The default error messages that get bubbled up are particularly ugly.
 

[appdomain.unhandledexception](http://msdn.microsoft.com/en-us/library/system.appdomain.unhandledexception.aspx)
[windowsformsapplicationbase.unhandledexception](http://msdn.microsoft.com/en-us/library/microsoft.visualbasic.applicationservices.windowsformsapplicationbase.unhandledexception(v=vs.110).aspx)

[Managing-Unhandled-Exceptions](http://www.codeproject.com/Articles/2949/)
[VB-NET-Global-Try-Catch](http://www.codeproject.com/Articles/495208/)

[handled by the CLR][Unhandled Exception]


**'TODO: EXPAND**
You could come up with your own exception by inheriting the exception type and setting property helpers to aid with setting dictionary info, but since we prefer *composition over inheritance*, here's a better way to do it that can sit on top of anything of type `Exception`.


[pokemon]: http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html
[Unhandled Exception]: http://blogs.msdn.com/b/shawnfa/archive/2004/07/15/184490.aspx
[using]: http://msdn.microsoft.com/en-us/library/htd05whh.aspx
[IDisposable]: http://msdn.microsoft.com/en-us/library/system.idisposable(v=vs.110).aspx
[exception.data]: http://msdn.microsoft.com/en-us/library/system.exception.data.aspx
[IDictionary]: http://msdn.microsoft.com/en-us/library/system.collections.idictionary.aspx
[AddExceptionMessage]: http://stackoverflow.com/a/14410205/1366033
[PossibleIntendedRethrow]: http://dotnetinside.com/en/framework/JetBrains/JetBrains.ReSharper.Daemon.CSharp/PossibleIntendedRethrowWarning
