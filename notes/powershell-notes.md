---
title: Powershell
---

[Variable expansion / String interpolation](http://blogs.msdn.com/b/powershell/archive/2006/07/15/variable-expansion-in-strings-and-herestrings.aspx) - Only works with double quotes

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

**Help Syntax**

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

##### Create New Object

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
