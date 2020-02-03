---
title: Windows 8 App Development Presentation
tags: [post, VTCC5, BOSCC, winRT, xaml, MVVM]
date: 2013-09-20
postID: 3652160074787522299
---

#### Here's a list of all the resources I've put together for my talk on Windows 8 Application Development that I gave at:

*   The [Vermont Code Camp][1] on 9/21/13
*   The [Boston Code Camp][2] 10/19/13
*   The [VT.NET User Group][3] on 11/18/13

You can view the [slides][slides] from my presentation or [rate][rate] the talk if you'd like to provide some feedback  
  
The **BindableBase** class helps implement the MVVM pattern by implementing INotifyPropertyChanged on a base class which should be inherited by classes in your ViewModel  

*   [BindableBase <span class="vbColor">(VB)</span>][4]
*   [BindableBase <span class="csColor">(C#)</span>][5]

The **RelayCommand** class helps implement the MVVM pattern by exposing methods on your ViewModel as Properties to which your View can Bind  

*   [RelayCommand <span class="vbColor">(VB)</span>][6]
*   [RelayCommand <span class="csColor">(C#)</span>][7]

The **UserSettingsBase** class provides base functionality that allows you to create persistent user settings with regular Property Syntax.

* [UserSettingsBase <span class="vbColor">(VB)</span>][usersettingsbase.vb]
* [UserSettingsBase <span class="csColor">(CS)</span>][usersettingsbase.cs]
  
The **SettingsHelper** class takes care of the plumbing to link the Settings Charm Panel with your own User Controls. 

**NOTE**: As of Windows 8.1, winRT released a native [SettingsFlyout][SettingsFlyout] so the following code is primarily for historical purposes.

* [Settings Helper <span class="vbColor">(VB)</span>][settingsHelper.vb]
* [Settings Helper <span class="csColor">(CS)</span>][settingsHelper.cs]
 
 
You can download the MVVM template in the [Visual Studio Extensions Gallery][8]  
Fork or contribute to it on [GitHub][9]  
Or read about it in my [Blogpost][10].  
  
For the Full Word Guesser Application in the Windows Store :

* [Source Code On GitHub][wordGuesserSource]
* [Windows Store Link][wordGuesserStore]

  
Here's a [SkyDrive Folder][skydrive] with all the files you might need.  In here, you'll find the **PowerPoint**, Demo **Source Code**, Resharper **Templates**, and code from the **Demo**.

 [1]: http://vtcodecamp.org/2013/sessions#introduction-to-windows-8-apps-for-windows-forms-developers
 [2]: http://www.bostoncodecamp.com/CC20/Sessions/Details/4166
 [3]: http://www.meetup.com/VTCode/events/146213762/
 [slides]: https://speakerdeck.com/kylemit/introduction-to-windows-8-apps-for-windows-forms-developers
[rate]: http://speakerrate.com/talks/26141-introduction-to-windows-8-apps-for-windows-forms-developers
 
 [4]: http://codepaste.net/dfijb9
 [5]: http://codepaste.net/by8jbe
 [6]: http://codepaste.net/xazv4j
 [7]: http://codepaste.net/f48jvb
 
 
 [usersettingsbase.vb]: http://codepaste.net/4bmahn
 [usersettingsbase.cs]: http://codepaste.net/1pzhgt
 [settingsHelper.vb]: http://codepaste.net/tvhkj8
 [settingsHelper.cs]: http://codepaste.net/gq1rr3
 
 [8]: http://visualstudiogallery.msdn.microsoft.com/9ef94ec6-3378-45b9-908c-cff703d2b901
 [9]: https://github.com/KyleMit/WindowsStoreMvvmTemplate/
 [10]: http://codingeverything.blogspot.com/2013/11/windows-store-mvvm-template.html
 
 
 [SettingsFlyout]: http://msdn.microsoft.com/library/windows/apps/dn252814
 
 [wordGuesserSource]: https://github.com/KyleMit/WordGuess
 [wordGuesserStore]: http://apps.microsoft.com/windows/en-us/app/b85001c1-0782-4d4a-af96-caf23d56806e
 
 [skydrive]: https://skydrive.live.com/?cid=9935281cd314f220&id=9935281CD314F220%2132843&authkey=!AMX4OQAZXQw_odU
