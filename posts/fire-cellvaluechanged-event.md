---
title: Firing The DataGridView CellValueChanged Event Immediately
tags: [post, .NET, DataGridView, VB.NET, WinForms]
date: 2013-01-20
postID: 8975368792610917782
---

### Intro

Let's say you have a list of things displayed in a `DataGridView` and you want a user to be able to select among them on a `DataGridViewCheckBoxColumn`.  Further, let's say that you'd like to know as soon as the user has made a change to their selection.  You might want to handle this for a number of reasons: to enable a save button, to change the appearance of selected items, to display a pop-up window, or to check for consistency against other choices.  It turns out that this is trickier than it might seem and doesn't work great out of the box from .NET, but, not to fear, there are several easy work-arounds that will get the trick done.

### The Problem

```
'This won't fire until the cell has lost focus
Private Sub DataGridCellValueChanged(sender As DataGridView, 
                                     e As DataGridViewCellEventArgs) _ 
        Handles DataGridView1.CellValueChanged
 IsDirty = True
End Sub
```

When you click a CheckBox in a DataGridViewCheckBoxColumn, the check marker will update immediately, but CellValueChanged event on the DataGridView will not fire until the user happens to click elsewhere and the cell has lost focus.  Why?  Well, the DataGridView thinks it's a little preemptive to go declaring that the cell value has changed while you are still selected on it.  This makes more sense when we think about a TextBox column.  We would not want the CellValueChanged event firing every single time a letter was added to a person's last name.  Still, it doesn't make much sense when we think about the way CheckBox's work, in that, they can only ever be On or Off, and that once you have made your selection, you're probably pretty confident that you want to change the value.  Any solution is going to involve using an event that definitely will fire to stop the DataGridView from thinking it's in edit mode.

### The Solution

This problem was also raised in a [StackOverflow Question](http://stackoverflow.com/q/381072/1366033) which seemed to advocate for handling the `MouseUp` event on the `DataGridView` and then call the `EndEdit` method, thereby ensuring that the grid would evaluate whether or not the Cell's value had, indeed, changed and fire the corresponding event appropriately   I must admit, this works, but feels like more of a work around than a solution.  What if someone is able to make a selection without a click event?  There seems to be a non-zero percent chance that this might fire incorrectly in some unforeseen situation.  I'd rather code to do exactly what it says it's doing.

We could also handle the `DataGrid`'s `CellContentClick` event.  This has the added bonus of not firing when you have clicked outside of the checkbox area, but still falls perhaps under the same category of not being entirely clear to someone unfamiliar with this issue why this particular event should force the grid to exit edit mode.

After looking into the problem at some length, MSDN actually seems to offer the best solution right on their [CellContentClick event page](http://msdn.microsoft.com/en-us/library/system.windows.forms.datagridview.cellcontentclick.aspx).  Here's a cleaned up version:

```
'Ends Edit Mode So CellValueChanged Event Can Fire
Private Sub EndEditMode(sender As System.Object, 
                        e As EventArgs) _
            Handles DataGridView1.CurrentCellDirtyStateChanged
    'if current cell of grid is dirty, commits edit
    If DataGridView1.IsCurrentCellDirty Then
        DataGridView1.CommitEdit(DataGridViewDataErrorContexts.Commit)
    End If
End Sub

'Executes when Cell Value on a DataGridView changes
Private Sub DataGridCellValueChanged(sender As DataGridView, 
                                     e As DataGridViewCellEventArgs) _
            Handles DataGridView1.CellValueChanged
    'check that row isn't -1, i.e. creating datagrid header
    If e.RowIndex = -1 Then Exit Sub

    'mark as dirty
    IsDirty = True
End Sub
```

In the code sample above, we monitor the `CurrentCellDirtyStateChanged` event.  I like that it tells us very specifically what has happened to the grid at the point in time when the event is raised and handled.  It's important to note that this event will get called twice, once on changing the state of the cell to dirty (before committing changes) and once when changing the cell state back to 'clean' (after the changes have been committed).  For this reason, before preforming any action, it checks to see when the current cell is dirty or not.  If it is, it'll call the `CommittEdit` method and pass in the `DataGridViewDataErrorContexts` enumerator type of `Commit`

### Sample / Source Code

I worked up what I hope to be an interesting sample of the different methods by which we can get the `CellValueChanged` event to eventually fire.

The form loads by default to only handle the CellValueChanged event itself, which means we will immediately notice the problem at hand.  Changing the active status for a given person will not fire the event until some other object on the form is clicked and receives focus.  Anytime a grid event is handled, a notification will pop-up and fade out.  This helps identify when, and in what order, events are being handled without explicitly having to set breakpoints and wait for the code to catch each event. 

![](https://i.imgur.com/3q1kaKz.png)

In the options group box, you can choose to include event handlers notifications or not.  Also, the drop down list will add / remove handlers so you can easily test out which handlers do what without having to specifically comment out lines of code.

You can download the mini application and the source code for this demo on [SkyDrive](https://skydrive.live.com/redir?resid=9935281CD314F220!130) or by clicking the icons below:

<iframe frameborder="0" height="128" scrolling="no" src="https://skydrive.live.com/embed?cid=9935281CD314F220&resid=9935281CD314F220%2132842&authkey=AJ4kZJ6J3vONFUY" width="165"></iframe>
<iframe frameborder="0" height="128" scrolling="no" src="https://skydrive.live.com/embed?cid=9935281CD314F220&resid=9935281CD314F220%2132839&authkey=AA45YXfLI9HjEF8" width="165"></iframe>
