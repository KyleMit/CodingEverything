# Powershell

* [Installing PowerShell - PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7)
* [Migrating from Windows PowerShell 5.1 to PowerShell 7](https://docs.microsoft.com/en-us/powershell/scripting/install/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7)

* **Core** - pwsh.exe
* **Classic** - powershell.exe

## Philosophy

* [Monad Manifesto – the Origin of Windows PowerShell](https://devblogs.microsoft.com/powershell/monad-manifesto-the-origin-of-windows-powershell/)
* [Monad Manifesto](https://www.jsnover.com/Docs/MonadManifesto.pdf)

## Visual Studio Code

* [Get started with PowerShell development in Visual Studio Code](https://devblogs.microsoft.com/scripting/get-started-with-powershell-development-in-visual-studio-code/)
* [Visual Studio Code editing features for PowerShell development](https://devblogs.microsoft.com/scripting/visual-studio-code-editing-features-for-powershell-development-part-2/)
* [Debugging PowerShell script in Visual Studio Code](https://devblogs.microsoft.com/scripting/debugging-powershell-script-in-visual-studio-code-part-1/)

### Startup Error

[Troubleshoot Visual Studio Code Integrated Terminal launch failures](https://code.visualstudio.com/docs/supporting/troubleshoot-terminal-launch)


PowerShell executable: C:\Users\kyle.mitofsky\.dotnet\tools\pwsh.exe
PowerShell args:


The terminal process :
"C:\Users\kyle.mitofsky\.dotnet\tools\pwsh.exe
'-NoProfile'
'-NonInteractive'
'-ExecutionPolicy'
'Bypass'
'-Command'
'Import-Module 'c:\Users\kyle.mitofsky\.vscode\extensions\ms-vscode.powershell-2020.6.0\modules\PowerShellEditorServices\PowerShellEditorServices.psd1';


```none
pwsh.exe started.
Waiting for session file
Timed out waiting for session file to appear.
Language server startup failed.
The language service could not be started
Error: Timed out waiting for session file to appear
```

## Versions

* **Windows PowerShell 5.1**: `$env:WINDIR\System32\WindowsPowerShell\v1.0`
* **PowerShell Core 6.x**: `$env:ProgramFiles\PowerShell\6`
* **PowerShell 7**: `$env:ProgramFiles\PowerShell\7`


## Syntax

* [add value to array](https://ss64.com/ps/syntax-arrays.html)
* [foreach loop](https://ss64.com/ps/foreach.html)
* [foreach-object](https://ss64.com/ps/foreach-object.html)
* [> operator](https://ss64.com/ps/syntax-compare.html)
* [if statement](https://ss64.com/ps/if.html)
* [create function](https://ss64.com/ps/syntax-functions.html)
* [create function 2](https://www.microsoftpressstore.com/articles/article.aspx?p=2449030)
* [format table widths](https://stackoverflow.com/a/52174495/1366033)
* [Get-Date](https://ss64.com/ps/get-date.html)


## PowerShell

* [Math Round](https://blogs.technet.microsoft.com/heyscriptingguy/2015/01/30/powertip-use-powershell-to-round-to-specific-decimal-place/)
* [Group & Aggregate](https://social.technet.microsoft.com/Forums/office/en-US/a7d96f2b-140b-49b5-a70f-f2df19c490ac/groupobject-and-measure-object?forum=winserverpowershell)
* [Group & Aggregate](https://stackoverflow.com/a/6000217/1366033)


## PS Mail Funcs

https://social.technet.microsoft.com/Forums/Lync/en-US/cc2187e4-7e3f-40be-831f-83c3820451b3/how-can-i-access-an-outlook-folder-with-powershell-other-than-the-default?forum=winserverpowershell
https://msdn.microsoft.com/en-us/magazine/dn189202.aspx

## Interop.Outlook

Folders Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.office.interop.outlook.oldefaultfolders?view=outlook-pia
Status Enum](https://docs.microsoft.com/en-us/dotnet/api/microsoft.office.interop.outlook.olbusystatus?view=outlook-pia

## Third Party Modules

`[Join-Object`](https://github.com/RamblingCookieMonster/PowerShell/blob/master/Join-Object.ps1)
[`ImportExcel`](https://www.powershellgallery.com/packages/ImportExcel/7.0.1)

```ps1
Install-Module -Name ImportExcel -Repository PSGallery -Force
```


**Powershell Version**:

```bash
$PSVersionTable.PSVersion
```

### Powershell Intellisense

![Intellisense](https://i.imgur.com/inWrUSB.png)

* <kbd>Ctrl</kbd> + <kbd>Space</kbd> will trigger
* <kbd>Tab</kbd> will cycle through all applicable items if dropdown isn't open
* Typing will trigger
* Space will trigger

![Example](https://i.imgur.com/rQ9s3Sa.png)

[Adding Argument Completion Support](http://www.powertheshell.com/argument-completion-in-powershell-3-0/)

```bash

# Complex Type
function Select-Color
{
    param
    (
        [System.ConsoleColor]
        $Color
    )

    "You selected: $Color"
}
# Custom List
function Select-City
{
    param
    (
        [ValidateSet('New York','Redmond','Hanover','Tokio')]
        $City
    )

    "You selected: $City"
}
```


[Get definition of function](http://superuser.com/q/414036/180163)

```bash
$function:test
(Get-Command test).Definition

$metadata = New-Object system.management.automation.commandmetadata (Get-Command Get-EventLog)
[System.management.automation.proxycommand]::Create($MetaData) | out-file C:\get-process.ps1
```

### Function Parameters

[The PowerShell function – Parameters, data types, return values](https://4sysops.com/archives/the-powershell-function-parameters-data-types-return-values/)

**Function Syntax**:

```bash
function [<scope:>]<name> [([type]$parameter1[,[type]$parameter2])]{

    param([type]$parameter1 [,[type]$parameter2])
    dynamicparam {<statement list>}

    begin {<statement list>}
    process {<statement list>}
    end {<statement list>}

}
```

Two Parameter Syntaxes:

```bash
#Option 1
function Start-App([String] $AppName){
    #<statements>
}

#Option 2
function Start-App {
    Param(
        [String]
        $AppName
    )
    #<statements>
}
```

You can add any number of optional white-space separated [parameter attributes](https://technet.microsoft.com/en-us/library/ms714348(v=vs.85).aspx) to each parameter

### Resources

* [Get-PowerShellBlog: Bye Bye Backtick: Natural Line Continuations in PowerShell](https://get-powershellblog.blogspot.com/2017/07/bye-bye-backtick-natural-line.html)

* https://github.com/jefflomax/configure-iis-webapps-powershell/blob/master/configureIISWebApplications.ps1
* http://geekswithblogs.net/QuandaryPhase/archive/2013/02/24/create-iis-app-pool-and-site-with-windows-powershell.aspx
* http://surroundingthecode.wordpress.com/2011/02/24/scripting-iis7-application-pool-configuration-in-powershell/
* http://habaneroconsulting.com/insights/Set-the-Specific-Times-to-Recycle-an-Application-Pool-with-PowerShell#.VCR7lPldV8E
* http://serverfault.com/questions/347199/how-can-i-set-iis-application-pool-recycle-times-without-resorting-to-the-ugly-s
* http://stackoverflow.com/questions/18319961/how-can-i-set-iis-windows-auth-providers-with-powershell
* http://stackoverflow.com/questions/6847647/enabling-impersonation-in-iis-7-5-via-powershell
* http://technet.microsoft.com/en-us/library/hh867899.aspx
* http://blog.itsnotfound.com/2014/01/truefalse-boolean-values-in-powershell/
* [PowerShell 101 From a Linux Guy](https://developer.rackspace.com/blog/powershell-101-from-a-linux-guy/)
* [Creating table using Powershell](http://blogs.msdn.com/b/rkramesh/archive/2012/02/02/creating-table-using-powershell.aspx)
* http://geekswithblogs.net/QuandaryPhase/archive/2013/02/24/create-iis-app-pool-and-site-with-windows-powershell.aspx
* http://technet.microsoft.com/en-us/library/hh867899.aspx

* [Parameter Attribute Declaration](https://technet.microsoft.com/en-us/library/ms714348%28v=vs.85%29.aspx)
* [Parameters - Default Values](http://blogs.technet.com/b/heyscriptingguy/archive/2011/05/21/create-and-use-default-values-in-powershell-scripts.aspx)
* [Dynamic Parameters Explanation](http://www.powershellmagazine.com/2014/05/29/dynamic-parameters-in-powershell/)
* [Dynamic Parameter ValidateSet](http://blogs.technet.com/b/pstips/archive/2014/06/10/dynamic-validateset-in-a-dynamic-parameter.aspx)
* [Cmdletbinding](http://blogs.technet.com/b/heyscriptingguy/archive/2012/07/07/weekend-scripter-cmdletbinding-attribute-simplifies-powershell-functions.aspx)
* [Import-Module](https://technet.microsoft.com/en-us/library/Hh849725.aspx)
* [Create Module](http://blogs.technet.com/b/heyscriptingguy/archive/2010/01/21/hey-scripting-guy-january-21-2010.aspx)
* [How And When To Create And Use PowerShell Modules](http://www.tomsitpro.com/articles/powershell-modules,2-846.html)
[`ParameterSetName="__AllParameterSets"`](http://powershell.org/wp/forums/topic/trouble-with-dynamic-parameter-positioning-in-parametersets/)
[Get Object Type](http://stackoverflow.com/q/7634555/1366033):

> WARNING: The names of some imported commands from the module 'Maintain-IIS' include unapproved verbs that might make them less discoverable. To find the commands with unapproved verbs, run the Import-Module command again with the Verbose parameter. For a list of approved verbs, type Get-Verb.

[Approved Verbs for Windows PowerShell Commands](https://technet.microsoft.com/en-us/library/ms714428(v=vs.85).aspx)



```bash
$a.GetType();
```


### Doc Comments

[Windows PowerShell: Comment your way to help](https://technet.microsoft.com/en-us/magazine/hh500719.aspx)

Generally wrap in a single `<# block comment #>`, though it's valid syntax to individually comment every line

#### Help Syntax

```bash
<#
.SYNOPSIS

The synopsis goes here. This can be one line, or many.
.DESCRIPTION

The description is usually a longer, more detailed explanation of what the script or function does. Take as many lines as you need.
.PARAMETER computername

Here, the dotted keyword is followed by a single parameter name. Don't precede that with a hyphen. The following lines describe the purpose of the parameter:
.PARAMETER filePath

Provide a PARAMETER section for each parameter that your script or function accepts.
.EXAMPLE

There's no need to number your examples.
.EXAMPLE
PowerShell will number them for you when it displays your help text to a user.
#>
```


### ALl Object Properties

[how to see all properties](http://stackoverflow.com/q/7259142/1366033)

```bash
Get-WmiObject -Class "Win32_computersystem" | Format-List *
```

### Modules

```bash
# View Loaded Modules
Get-Module –ListAvailable

# Import Module
Import-Module '\\ahs\ahsfiles\VDH\Divisional Shares\Prog\Powershell\Maintain-IIS.psm1'

# View Available Commands
Get-Command -Module Maintain-IIS

# View Function Help
Get-Help New-WebApp
```

### XML in Powershell

http://stackoverflow.com/questions/14100077/need-to-replace-value-of-an-attribute-in-xml-file-using-xpath
http://stackoverflow.com/questions/1719460/how-do-i-alter-xml-with-powershell-xpath-and-save-the-document
http://blogs.msdn.com/b/sonam_rastogi_blogs/archive/2014/05/14/update-xml-file-using-powershell.aspx

### Tools

[PsGet](https://github.com/psget/psget)

### Debugger

[Using the PowerShell ISE Debugger](http://powershell.com/cs/blogs/tips/archive/2015/02/23/using-the-powershell-ise-debugger.aspx)


<kbd>F9</kbd> - Toggle Breakpoint
<kbd>F5</kbd> - Start/Continue Script
<kbd>Shift</kbd> + <kbd>F5</kbd> - Exit/Abort Script
<kbd>F10</kbd> - Step Over
<kbd>F11</kbd> - Step Into

### Prompt

[How to Use -confirm in PowerShell](http://stackoverflow.com/q/24649019/1366033)

```bash
# Console Window
Write-Host "Are you Sure You Want To Proceed?"
$confirmation = Read-Host "Type 'y' for yes, 'n' for no"
if ($confirmation -eq 'y') {
  # proceed
}


# GUI Window
$message  = 'Title'
$question = 'Are you sure you want to proceed?'

$choices = New-Object Collections.ObjectModel.Collection[Management.Automation.Host.ChoiceDescription]
$choices.Add((New-Object Management.Automation.Host.ChoiceDescription -ArgumentList '&Yes'))
$choices.Add((New-Object Management.Automation.Host.ChoiceDescription -ArgumentList '&No'))

$decision = $Host.UI.PromptForChoice($message, $question, $choices, 1)
if ($decision -eq 0) {
  Write-Host 'confirmed'
} else {
  Write-Host 'cancelled'
}
```

#### Create New Object

[Creating Custom Objects](http://social.technet.microsoft.com/wiki/contents/articles/7804.powershell-creating-custom-objects.aspx)

```bash
$obj = [PSCustomObject]@{
    Property1 = 'one'
    Property2 = 'two'
    Property3 = 'three'
}
```

[Creating .NET and COM Objects (New-Object)](https://technet.microsoft.com/en-us/library/dd347574.aspx)

```bash
$AppLog = New-Object -TypeName System.Diagnostics.EventLog -ArgumentList Application
```

[Using Static Classes and Methods](https://technet.microsoft.com/en-us/library/dd347632.aspx)

```bash
# Returns Type
[System.Environment]

# Get Type Members
[System.Environment] | Get-Member -Static

# Call Static Method On Type
[System.Environment]::Commandline
```



## Questions


* [Null coalescing in powershell](https://stackoverflow.com/q/10623907/1366033)
* [How to add properties to a PowerShell object from an array](https://stackoverflow.com/a/27847509/1366033)
* [Using PowerShell to split a string into an array](https://www.sqlshack.com/powershell-split-a-string-into-an-array/)

* [How can I graph the # of emails I receive per day](https://superuser.com/q/366065/180163)
* [Reading mail data from powershell](https://stackoverflow.com/q/29087374/1366033)
* [Powershell script that reads Outlook emails and exports results as .csv](https://codereview.stackexchange.com/q/165994/23844)


* [Inline If / Ternary Expression](https://stackoverflow.com/a/29982682/1366033)
* [match all chars except w/ negated set](https://stackoverflow.com/a/1409170/1366033)
* [don't match particular chars w/ negative lookahead](https://stackoverflow.com/a/2973495/1366033)
* [regex expression for OU groups](https://regexr.com/4st2i)
* [powershell regex capture groups](https://stackoverflow.com/a/59900840/1366033)
* [Anonymous Object](https://stackoverflow.com/a/56813241/1366033)
* [Calculated Property](https://stackoverflow.com/q/59901298/1366033)

* [compare two objs](https://stackoverflow.com/q/47576496/1366033)
* [compare all props](https://blogs.technet.microsoft.com/janesays/2017/04/25/compare-all-properties-of-two-objects-in-windows-powershell/)
* [nested conditional](https://stackoverflow.com/a/34311158/1366033)
* [Variable Expansion / Command Substitution](https://powershellexplained.com/2017-01-13-powershell-variable-substitution-in-strings/)

* [Get-AD Users](http://www.powershelladmin.com/wiki/Check_if_an_AD_user_exists_with_Get-ADUser)
* [Check AD User](https://serverfault.com/questions/612856/how-to-check-if-an-ad-username-is-already-used)
* [Query AD Accounts](http://www.deliveron.com/blog/query-user-accounts-active-directory-powershell/)
* [Expand Object Properties](https://www.petri.com/expanding-objects-properties-powershell)
* [Build Custom Object](https://technet.microsoft.com/en-us/library/hh750381.aspx)

* [Why does git think my .sql file is a binary file?](http://stackoverflow.com/a/40250979/1366033)
* [Find versioned files](http://www.heikniemi.net/hardcoded/2010/02/powershell-basics-4-matching-and-capturing-with-regular-expressions/)
* [Group by Filename](https://technet.microsoft.com/en-us/library/ee176864.aspx)

* [Display Instances](https://stackoverflow.com/a/8153857/1366033)
* [Find and Replace](https://stackoverflow.com/a/2837891/1366033)
* [Search Depth](https://stackoverflow.com/a/13250444/1366033)

* [Reddit Join](https://www.reddit.com/r/PowerShell/comments/2zqff6/join_objects_arrays_together_like_sql_join/)
* [SO Join](http://stackoverflow.com/questions/11721835/in-powershell-how-can-i-combine-the-results-of-two-commands-that-have-a-1-to-1)
* [SO Join](http://stackoverflow.com/questions/1851087/powershell-join)
* [Join-Object](http://poshcode.org/1461)
* [Join-Object](http://blogs.msdn.com/b/powershell/archive/2012/07/13/join-object.aspx)
* [Join-Object](http://ramblingcookiemonster.github.io/Join-Object/)
* [Join-Object](https://github.com/RamblingCookieMonster/PowerShell/blob/master/Join-Object.ps1)
* [Calculated Properties](https://technet.microsoft.com/en-us/library/ff730948.aspx)

* [PS Object Array](https://stackoverflow.com/a/17354800/1366033)
* [Data Tables](https://powershellreflections.wordpress.com/2011/02/14/using-powershsell-to-access-sql-data/)

* [Find Out Who Is Logged On to a Remote Machine With Just One Line of Code](https://www.itprotoday.com/devops-and-software-development/find-out-who-logged-remote-machine-just-one-line-code)
* [Who's logged in to remote PC?](https://community.spiceworks.com/scripts/show/1166-who-s-logged-in-to-remote-pc)
* [How to find a logged-in user remotely using PowerShell](https://4sysops.com/archives/how-to-find-a-logged-in-user-remotely-using-powershell/)
* [Get remote computer system and hardware information](https://community.spiceworks.com/scripts/show/2773-get-remote-computer-system-and-hardware-information)
* [How can I check what machines I'm logged into within a domain?](https://serverfault.com/a/477602)
* [How to find a logged-in user remotely using PowerShell](https://4sysops.com/archives/how-to-find-a-logged-in-user-remotely-using-powershell/)
* [T-SQL Tuesday #006 Blobs, FileStream and PowerShell](https://www.sqlservercentral.com/blogs/t-sql-tuesday-006-blobs-filestream-and-powershell)
* [How To: Export SQL Server FileStream Data with PowerShell](http://social.technet.microsoft.com/wiki/contents/articles/899.how-to-export-sql-server-filestream-data-with-powershell.aspx)
* [Delete files without an extension in PowerShell](https://stackoverflow.com/a/42345207/1366033)
* [Finding All the Empty Folders in a Directory Tree](https://technet.microsoft.com/en-us/library/ff730953.aspx)


* [Variable expansion / String interpolation](http://blogs.msdn.com/b/powershell/archive/2006/07/15/variable-expansion-in-strings-and-herestrings.aspx) - Only works with double quotes

    ```bash
    PS> $x="TEST"
    PS> "This is a $x"
    This is a TEST
    PS> 'This is a $x'
    This is a $x
    ```

    Formally - `$ExecutionContext.InvokeCommand.ExpandString($string)`

    Expressions should be enclosed:

    ```bash
    $($variableName) or ${variableName}
    ```

