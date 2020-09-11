---
title: Handle Text Change In Selected Index Changed Event
tags: [post, .NET, VB.NET, WinForms]
date: 2013-02-23
postID: 1867507955821545613
---

### The Problem

You may have noticed that .NET won't let you change the `Text` value of a `ComboBox` during the `SelectedIndexChanged` event.  This can be quite frustrating and difficult to work-around if you have want to update the ComboBox text during a when the user makes a selection.  For example, you might want to back out of a bad user selection or bind each selection item with different formatting when selected.  Let's clear up a couple things that will help us understand why .NET prevents us from doing what seems like a reasonable default functionality, and then we'll show one way to workaround this limitation.

### Understanding the System.Windows.Forms.ComboBox

When you select an item from a combo box, the `SelectedIndex` property of the ComboBox changes to the index location of the item you selected.  The ComboBox `Text` property is automatically updated to the display value of the item at the specified index.  This is the only update to the ComboBox Text that is allowed by default.  To understand this, let's look at another out-of-the-box ComboBox behavior.

If you have a ComboBox populated with the following items:

1. Red
2. Blue
3. Green


Let's say the current SelectedIndex value is `-1` and the current Text value is `Select a color...`

If in our code we change the value of the Text to blue:

```vb
ComboBox1.Text = "Blue"
```

Then .NET will automatically recognize that this matches an item in our collection and change the SelectedIndex value to `2`, thereby also firing the SelectedIndexChanged event.  The reason .NET won't let you change the Text property *during* a SelectedIndexChanged event is because they are worried about creating an endless loop by firing another SelectedIndexChanged event.

### The Solution

We can resolve this relatively easily by invoking a delegate during the selection changed event that will *eventually* change the text property.  We'll load a generic WinForms window by adding two items to a ComboBox, one of which we want to reset the form when selected.  This item represents a selection that may or may not be invalid, but is expensive to figure out, so we don't want to necessarily evaluate it early and remove it from the list before the user has a chance to select it.

![example combo box](https://i.imgur.com/mO51bXt.png)

We'll start by declaring a [`Delegate Sub`][delegate] within our class.  The only important thing about a Delegate is the method signature that you are passing in.  Since we want to call the ResetComboBox method which contains on parameters, our Delegate will not contain any arguments as well.

On the `SelectedIndexChanged` event, we'll call `BeginInvoke` and specify that when it invokes, it should look to a method at the `AddressOf` ResetComboBox.

```vb
'Declares a delegate sub that takes no parameters
Delegate Sub ComboDelegate()

'Loads form and controls
Private Sub LoadForm(sender As System.Object, e As EventArgs) _
 Handles MyBase.Load
 ComboBox1.Items.Add("This is okay")
 ComboBox1.Items.Add("This is NOT okay")
 ResetComboBox()
End Sub

'Handles Selected Index Changed Event for combo Box
Private Sub ComboBoxSelectionChanged(sender As System.Object, e As EventArgs) _
 Handles ComboBox1.SelectedIndexChanged
 'if option 2 selected, reset control back to original
 If ComboBox1.SelectedIndex = 1 Then
  BeginInvoke(New ComboDelegate(AddressOf ResetComboBox))
 End If

End Sub

'Exits out of ComboBox selection and displays prompt text
Private Sub ResetComboBox()
 With ComboBox1
  .SelectedIndex = -1
  .Text = "Select an option"
  .Focus()
 End With
End Sub
```

You'll notice that when ResetComboBox is eventually called by the delegate, it will also fire the SelectionChanged event when we change the SelectedIndex to **-1**.  If there's a chance that you're handling anything in the change event that could cause a repetitive loop, you can include a private `cancelAction` boolean property in your class, defaulted to False.  Then when you start the ResetComboBox method, set `cancelAction` to True and reset it to False at the end of method.  In the selection changed event, exit the sub if cancel action will set and you will never accidentally execute code when you're resetting controls

```vb
If cancelAction Then Exit Sub
```

### Source Code

You can find the [**source code**][source] for this application from SkyDrive.  Please comment with any suggestions or questions

[delegate]: http://msdn.microsoft.com/en-us/library/ms172879.aspx
[source]: https://skydrive.live.com/?cid=9935281cd314f220&id=9935281CD314F220%2125978&authkey=!AP3uB2huZO6DXxY
