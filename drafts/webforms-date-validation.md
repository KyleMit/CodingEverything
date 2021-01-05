---
title: WebForms Date Validation Controls Overview
tags: [ASP.NET, webforms, Validation]
---

ASP.NET provides a great number of custom [validation controls][validation controls].  We'll examine some of them here and ways they can improve and simplify your code base.

Let's say you had a very simple setup that took in a date field with the following code:

```html
<asp:label
     runat="server"
     id="lblBirthDate"
     Text="Birth Date:"/>
<asp:textbox
     runat="server"
     id="txtBirthDate"/>
```

```html
<asp:requiredfieldvalidator
     runat="server"
     id="rfvBirthDate"
     ControlToValidate="txtBirthDate"
     Text="!"
     ErrorMessage="Birth Date is Required."
     Display="Dynamic"
     SetFocusOnError="True" />
```

```html
<asp:CompareValidator
     runat="server"
     id="dateBirthDate"
     ControlToValidate="txtBirthDate"
     Text="!"
     ErrorMessage="Please enter a valid date."
     Display="Dynamic"
     SetFocusOnError="True"
     Type="Date"
     Operator="DataTypeCheck" />
```

```html
<asp:CompareValidator
     runat="server"
     id="minBirthDate"
     ControlToValidate="txtBirthDate"
     Text="!"
     ErrorMessage="Date cannot be earlier than 01/01/1900."
     Type="Date"
     Operator="GreaterThanEqual"
     ValueToCompare="01/01/1900" />
```

```html
<asp:RangeValidator
     runat="server"
     id="rangeBirthDate"
     ControlToValidate="txtBirthDate"
     Text="!"
     ErrorMessage="Date cannot be earlier than 01/01/1900."
     Type="Date"
     Operator="GreaterThanEqual"
     ValueToCompare="01/01/1900" />
```

Besides writing some JavaScript for you, one of the nicest things about ASP Validators is that they run on the server AND the client so you only have to write the code once.  You can get dynamic updates for users who have javascript enabled, but still have the added security of being able to easily check if all the validation controls passed once you've posted back to the server.  Simply call the page method Validate and check if the page property `IsValid` is true.  If the page comes back as invalid, you can loop through each validator on the page and return an informative message back to the client.

```vb
'validate controls on server side
Page.Validate()
'only evaluate if valid
If Not Page.IsValid Then
    Dim pageErrors As String() = _
        (From v As BaseValidator In Page.Validators _
         Where Not v.IsValid AndAlso v.Visible _
         Select v.ErrorMessage).ToArray()

    Dim alertMsg As String =
    alertMsg = "The following input validation error(s) were found: \n \n" & _
        String.Join("\n", pageErrors)
    alertMsg = alertMsg.Replace("'", "\'") 'escape single quotes
    Dim alertScript As String = String.Format("alert('{0}');", alertMsg)
    Page.ClientScript.RegisterStartupScript(Me.GetType(), "Script" & _
        alertScript.Length.ToString, alertScript, True)
    Exit Sub
End If
```

[validation controls]: http://msdn.microsoft.com/en-us/library/debza5t0(v=vs.100).aspx
