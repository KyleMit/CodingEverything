---
title: Testing Syntax Highlighting edge cases in VB.NET
tags: ['post', .net, vb]
draft: true
---

Works Just Fine

```vb
Private Sub Form_Load()
    ' Execute a simple message box that says "Hello, World!"
    MsgBox "Hello, World!"
End Sub
```

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

Automatically Detect as PHP

```vb
Public Function GetCurrentAge(ByVal dob As Date) As Integer
    Dim age As Integer = 0
    Return age
End Function
```

Manually Detect as VBScript

```vb
Public Function GetCurrentAge(ByVal dob As Date) As Integer
    Dim age As Integer = 0
    Return age
End Function
```

Can't Manually Detect As VBNET

```vb
Public Function GetCurrentAge(ByVal dob As Date) As Integer
    Dim age As Integer = 0
    Return age
End Function
```

<pre class="prettyprint"><code class="vbnet">'Finds Reminder Window and Brings to TopMost position  
Private Sub Application_Reminder(ByVal Item As Object)  
    On Error Resume Next  
    If True Then 
        If True Then  
            'show message box for first reminder  
            If Not messageAlreadyShown Then  
                MsgBox "First Reminder", vbSystemModal, ""  
                messageAlreadyShown = True  
            End If  
        End If
    End If
    'find reminder window  
    ReminderWindow = FindWindowA(vbNullString, "1 Reminder")  
      
    'bring reminder window to front  
    SetWindowPos ReminderWindow, HWND_TOPMOST, 0, 0, 0, 0, FLAGS  
End Sub 
</code></pre>
