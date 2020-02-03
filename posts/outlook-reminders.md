---
title: Making Sure Outlook Calendar Reminders Actually Pop-up in Windows 7
tags: [post, Outlook, Windows, VBA]
date: 2013-05-07
postID: 8900396906270977513
---

### Introduction

In Windows 7, MS Outlook seems to be horribly bad at popping up calendar reminders when outlook doesn't have focus.  This can cause a series of problems from minor annoyances to missed meetings.  As discussed in this [StackExchange](http://superuser.com/q/251963/180163) question, there are some relatively easy work-arounds to this issue that I'll elaborate on here.  If you've never used Outlook's VBA editor to extend it's capabilities before, this article will take you through how to set up everything you'll need to do, start to finish.  If you're already familiar with using VBA in Outlook, then you can just skip to [Step 5](#added-new-better-code-below) and paste in the code and you'll be all set.

### Step By Step

- **1)**   Hit the Windows Key and type "certificate"
      *   ![](https://i.imgur.com/jEKNPo6.png)
- **2)**  Select Digital Certificate for VBA Projects and type in a name for your certificate and hit OK
      *   ![](https://i.imgur.com/BblTAWZ.png)
- **3)** Open Outlook 2010 and Hit <kbd>Alt</kbd> + <kbd>F11</kbd> to start the VBA editor
- **4)**  In the Project Pane on the left, Expand `Project1` > `Microsoft Outlook Objects` > and double click on `ThisOutlookSession`
      *   ![](https://i.imgur.com/mlxcL8B.png)
- **5)** Paste in the following code exactly:

```vb
'ensures all reminder notices receive focus
Private Sub Application_Reminder(ByVal Item As Object)
    If TypeOf Item Is AppointmentItem Then
        Application.ActiveWindow.Activate
    End If
End Sub
```

### Added New Better Code Below
    
```vb
'Declare Functions From User32 Library  
Private Declare PtrSafe Function FindWindowA Lib "user32" _  
        (ByVal lpClassName As String, _  
         ByVal lpWindowName As String) As Long  
Private Declare PtrSafe Function SetWindowPos Lib "user32" _  
        (ByVal hwnd As Long, _  
         ByVal hWndInsertAfter As Long, _  
         ByVal X As Long, _  
         ByVal Y As Long, _  
         ByVal cx As Long, _  
         ByVal cy As Long, _  
         ByVal wFlags As Long) As Long  
  
'Declare Constants  
Private Const SWP_NOSIZE = &H1  
Private Const SWP_NOMOVE = &H2  
Private Const FLAGS As Long = SWP_NOMOVE Or SWP_NOSIZE  
Private Const HWND_TOPMOST = -1  
  
'Only show the message the first time  
Private messageAlreadyShown As Boolean  
  
'Finds Reminder Window and Brings to TopMost position  
Private Sub Application_Reminder(ByVal Item As Object)  
    On Error Resume Next  
      
    'show message box for first reminder  
    If Not messageAlreadyShown Then  
        MsgBox "First Reminder", vbSystemModal, ""  
        messageAlreadyShown = True  
    End If  
  
    'find reminder window  
    ReminderWindow = FindWindowA(vbNullString, "1 Reminder")  
    'bring reminder window to front  
    SetWindowPos ReminderWindow, HWND_TOPMOST, 0, 0, 0, 0, FLAGS  
End Sub 
```

- **6)**  Sign the Macro by going to Tools > Digital Signature and clicking Choose
      *   ![](https://i.imgur.com/RcGS2hs.png)
- **7)**  Select the certificate you created earlier and hit OK
      *   ![](https://i.imgur.com/CDJzfrG.png)
- **8)** Select OK again, hit <kbd>Ctrl</kbd> + <kbd>S</kbd> to save and exit the VBA window
-  **9)** To Enable Macros, Go to File > Options and select Trust Center from the left window
      *   ![](https://i.imgur.com/9SP6oqC.png)
- **10)** Run the Trust center by clicking the Trust Center Settings button on the right.
- **11)** From the Trust Center, select  Macro Settings, and select "Notifications for digitally signed macros, all other macros disabled" and hit OK
      *   ![](https://i.imgur.com/r9pQ1Pi.png)
- **12)** Exit Outlook -  It will ask you if you want to save the project, click Yes
- **13)** Start Outlook - It will give you a security notice.  Select "Trust all documents from this publisher" (You can first confirm that you are the publisher by selecting "Show Signature Details")
      *   ![](https://i.imgur.com/nD4t5CE.png)
- **14)** That’s it!  You’re all set.  You never have to touch any of that code again or miss another meeting (unintentionally)

**UPDATE!**

I've update the code to use [ActiveWindow](http://msdn.microsoft.com/en-us/library/office/aa219402(v=office.11).aspx) instead of [ActiveExplorer](http://msdn.microsoft.com/en-us/library/office/aa219397(v=office.11).aspx), which returns **nothing** "if no explorer is active."  Thanks to CW for the impetus to update my code.

