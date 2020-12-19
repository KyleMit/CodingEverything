# Visual Basic


## Syntax Highlighting Samples


Missing Several Keywords

```vb
#Const DEBUG = True
#Region "Code"
#End Region

Namespace Highlighter.Test
End Namespace

Public Shared Sub Main(ByVal args() As String, ParamArray arr As Object) _
    Handles Form1.Click
      Try
        Dim x = From x As String
                In l Select x.Substring(2, 4)
                Where x.Length > 0
      Catch ex As Exception
      End Try
End Sub
```
