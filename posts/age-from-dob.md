---
title: Calculating Age From DOB
tags: [post, .NET, VB.NET, Age, DateTime]
date: 2013-05-13
postID: 3584771563127215105
---

I couldn't believe there was no native way in .NET to do something alarmingly simple like calculate someone's age from their date of birth. Of all the amazing functions and properties on `DateTime` objects, this seems surprisingly non-existent. 

For such an easy task, it's also surprisingly complex; so much so that Jeff Atwood, creator of StackOverflow, even asked that question himself [here](http://stackoverflow.com/q/9/1366033).

For all my (and the internet's) failed attempts, read on.  If you're just looking for something to copy and paste in that will work, grab the following code

```vb
Public Function GetCurrentAge(ByVal dob As Date) As Integer
    Dim age As Integer
    age = Today.Year - dob.Year
    If (dob > Today.AddYears(-age)) Then age -= 1
    Return age
End Function
```

All of these methods, except the bottom one fail for various reasons:

```
Dim dob As Date = #5/14/1994#
Dim today As Date = #5/13/2013#
Dim age As Integer

age = DateDiff(DateInterval.Year, dob, today)
Console.WriteLine("DateDiff Year Age: {0}", age)
'19

age = today.Subtract(dob).TotalDays / 365.25
Console.WriteLine("Subtraction Age: {0}", age)
'19

age = Math.Floor(DateDiff(DateInterval.Month, dob, today) / 12)
Console.WriteLine("DateDiff Month Age: {0}", age)
'19

age = today.Year - dob.Year
If (dob > today.AddYears(-age)) Then age -= 1
Console.WriteLine("Year Part and Compare Age: {0}", age)
'18

Console.ReadKey()
```

Hope that helps!
