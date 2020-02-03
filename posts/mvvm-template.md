---
title: Windows Store MVVM Template
tags: [post, MVVM, WinStore, winRT, XAML]
date: 2013-11-16
postID: 1813415949087297439
---

A bare bones starter template for Windows Store 8.1 Projects that Utilizes the Model View View Model Pattern  

You can download the template from the [Visual Studio Extension Gallery][vs gallery]  
You can fork or contribute to the template on [github.com/KyleMit/WindowsStoreMvvmTemplate][github] 

## Directory:   
Here's a breakdown of the directory structure:

![directory][directory]
  
* **Assets**: contains images for the Package.appxmanifest
* **Model**: contains core business logic for the application
* **Resources**: contains common resources for the whole application
    * **AppResources.xaml**: contains xaml resources that is added to App.Resources
* **Utilities**: contains reusable helper classes that can be used in this, and other, projects.
    * **BindableBase.vb**: implements [`INotifyPropertyChanged`][inpc] which can be inherited by classes in you ViewModel
    * **NavigationHelper.vb**: adds Navigation support and Process Lifetime Management
    * **RelayCommand.vb**: implements [`ICommand`] [icommand] to help invoke delegates through binding.
    * **SuspensionManager.vb**: captures global session state to simplify process lifetime management
* **View**: contains views for the User Interface layer of the application
    * **MainView.xaml**: has the initial window that the application launches
* **ViewModel**: contains classes which help communicate between the *View* and the *Model*
    * **MainViewModel.vb**: contains the business logic for `MainView.xaml`
* **App.xaml**: contains resources scoped to the entire application
    * **App.xaml.vb**: contains startup code for the application

## Samples:

### Binding

#### MainView.xaml

```xml
<TextBox Text="{Binding PersonName}" />
```
  
#### MainViewModel.vb

```vb
Private _personName As String
Public Property PersonName As String
    Get
        Return _personName
    End Get
    Set(ByVal value As String)
        SetProperty(_personName, value)
    End Set
End Property
```

#### MainViewModel.cs
```
private string _propertyName;
public string PropertyName {
    get { return _propertyName; }
    set { SetProperty(ref _propertyName, value); }
}
```


### Commands

#### MainView.xaml

```xml
<button content="Say Hello" command="{Binding SayHelloCommand}" />
```
  
#### MainViewModel.vb

```vb
Public ReadOnly Property EnterNameCommand As RelayCommand
    Get
        If _enterNameCommand Is Nothing Then
            _enterNameCommand = New RelayCommand(Async Sub() Await EnterName())
        End If
        Return _enterNameCommand
    End Get
End Property

Private Function EnterName() As Task
    'do awaitable stuff here
End Function
```

[vs gallery]: http://visualstudiogallery.msdn.microsoft.com/9ef94ec6-3378-45b9-908c-cff703d2b901
[github]: https://github.com/KyleMit/WindowsStoreMvvmTemplate
[inpc]: http://msdn.microsoft.com/en-us/library/system.componentmodel.inotifypropertychanged(v=vs.110).aspx
[icommand]: http://msdn.microsoft.com/en-us/library/system.windows.input.icommand(v=vs.110).aspx
[directory]: https://i.imgur.com/IEz8jLj.png
