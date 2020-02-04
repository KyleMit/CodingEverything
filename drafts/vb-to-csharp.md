---
title: VB.NET -> C#
tags: ['post', .net, vb, c#]
draft: true
---


Locally reproduced guide from harding.edu on VB.NET and C# Comparison
http://www.harding.edu/fmccown/vbnet_csharp_comparison.html

<div><style>
pre.prettyprint {
 width:45%;
 float: left;
}
.vb-code, .cs-code {
 width:45%;
 float: left;
}
.clear {
 clear:both
}
</style></div>


### Program Structure

<div class="vb-code">VB</div><div class="cs-code">CS</div>

```vb
Imports System
Namespace Hello
  Class HelloWorld
    Overloads Shared Sub Main(ByVal args() As String)
      Dim name as String = "VB.NET"
      
      'See if an argument was passed from the command line
      If args.Length = 1 Then name = args(0)
      
      Console.WriteLine("Hello, " & name & "!")
    End Sub
  End Class
End Namespace
```

```cs
using System;
namespace Hello {
  public class HelloWorld {
    public static void Main(string[] args) {
      string name = "C#";
      
      // See if an argument was passed from the command line
      if (args.Length == 1) name = args[0];
        
      Console.WriteLine("Hello, " + name + "!");
    }
  }
}
```
<div class="clear"></div>

### Comments

<div class="vb-code">VB</div><div class="cs-code">CS</div>

```vb
' single line
'''<summary>XML Doc Comments</summary>
```

```cs
// single line
/// <summary>XML Doc Comments</summary
/* Multi
   line /*
```

<div class="clear"></div>

### Data Types


#### Value Types
VB          |  CS
:-----------|:------
Boolean     | bool
Byte, SByte | byte, sbyte
Char        | char
Short, ushort, Integer, UInteger, Long, ULong | short, ushort, int, uint, long, ulong
Single, Double | single, double
Decimal        | decimal
Date *(alias of `System.DateTime`) | DateTime *(not a built-in C# type)*
*structures*   | *structs*
*enumerations* | *enumerations*

#### Reference Types

VB          |  CS
:-----------|:------
*objects*   | *objects*
String      | string
*arrays*    | *arrays*
*delegates* | *delegates*


<div class="vb-code">VB</div><div class="cs-code">CS</div>

```vb
' Initializing
Dim correct as Boolean = True
Dim b as Byte = &H2A
Dim grade as Char = "B"c
Dim today as Date = #12/31/2010#
Dim amount As Decimal = 35.99@
Dim gpa as Single = 2.9!
Dim pi as Double = 3.13159265
Dim total as Integer = 5234
' reference
Dim person as Object = Nothing
Dim name as String = "Dwight"
' nullable types
Dim x as Integer? = Nothing
' anonymous types
Dim person = New With {.Name = "Sue, .GPA = 3.4}
```

```cs
// Initializing
bool correct = True;
byte b = 0x2A;
char grade = 'B';
DateTime today = DateTime.Parse("12/31/2010");
decimal amount = 35.99m;
float gpa = 2.9f
double pi = 3.14159265D
int total = 5234
// reference
object person = null;
string name = "Dwight";
// nullable
int? x = null;
// anonymous types
var person = new {Name = "Sue", GPA = 3.4};
```
<div class="clear"></div>
