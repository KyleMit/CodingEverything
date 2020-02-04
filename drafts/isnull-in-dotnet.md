---
title: SQL Like IsNull For .NET
tags: ['post', dotnet]
draft: true
---

http://technet.microsoft.com/en-us/library/ms184325.aspx

ISNULL ( check_expression , replacement_value )

```vb
Public Function IsNull(Of T)(ByVal currentvalue As T, ByVal defaultValue As T) As T
    Return If(currentvalue Is Nothing, defaultValue, currentvalue)
End Function
``` 


https://gist.github.com/eithe/5589891
