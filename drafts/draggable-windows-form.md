---
title: Draggable Windows Form
tags: ['post', winforms, .net]
draft: true
---

[Make a border-less form movable?](http://stackoverflow.com/a/1592899/1366033)

```vb
Public Const WM_NCLBUTTONDOWN As Integer = &HA1
Public Const HT_CAPTION As Integer = &H2

<DllImportAttribute("user32.dll")>
Public Shared Function SendMessage(hWnd As IntPtr, Msg As Integer, wParam As Integer, lParam As Integer) As Integer
End Function

<DllImport("user32.dll")>
Public Shared Function ReleaseCapture() As Boolean
End Function

Private Sub Form1_MouseDown(sender As Object, e As System.Windows.Forms.MouseEventArgs) Handles MyBase.MouseDown, Panel1.MouseDown, Label1.MouseDown
    If e.Button = MouseButtons.Left Then
        ReleaseCapture()
        SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0)
    End If
End Sub
```
