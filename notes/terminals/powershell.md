# Powershell


## Philosophy

* [Monad Manifesto – the Origin of Windows PowerShell](https://devblogs.microsoft.com/powershell/monad-manifesto-the-origin-of-windows-powershell/)
* [Monad Manifesto](https://www.jsnover.com/Docs/MonadManifesto.pdf)


## Getting Started

* [Installing PowerShell - PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7)
* [Migrating from Windows PowerShell 5.1 to PowerShell 7](https://docs.microsoft.com/en-us/powershell/scripting/install/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7)


## Versions

* **Windows PowerShell 5.1**: `$env:WINDIR\System32\WindowsPowerShell\v1.0`
* **PowerShell Core 6.x**: `$env:ProgramFiles\PowerShell\6`
* **PowerShell 7**: `$env:ProgramFiles\PowerShell\7`

* **Core** - pwsh.exe
* **Classic** - powershell.exe


## Docs

* [Requires](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_requires?view=powershell-7.2)
* [about PSModulePath](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_psmodulepath?view=powershell-7.2)
* [Type Accelerators](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_type_accelerators?view=powershell-5.1)
* [about Wildcards](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_wildcards?view=powershell-7.2)
* [about Enum](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_enum?view=powershell-7.2)
* [Everything you wanted to know about the if statement](https://docs.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-if?view=powershell-7.2#-match-regular-expression)


## Operators

[about_Operators](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators?view=powershell-7.2)


* [**Arithmetic Operators**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arithmetic_operators?view=powershell-7.2)
  * calculate values in a command or expression
    * `+` , `-` , `*` , `/` , `%`

* **Bitwise operators**
  * manipulate the bit patterns in values
    * `-band` , `-bor` , `-bxor` , `-bnot` , `-shl` , `-shr`

* [**Assignment Operators**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_assignment_operators?view=powershell-7.2)
  * assign, change, or append values to variables
    * `=` , `+=` , `-=` , `*=` , `/=` , `%=`

* [**Comparison Operators**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_comparison_operators?view=powershell-7.2)
  * compare values and test conditions
    * `-eq` , `-ne` , `-gt` , `-lt` , `-le` , `-ge`
  * string match
    * regex
      * `-match` , `-notmatch` , `-replace`
    * wildcard (`*`)
      * `-like` , `-notlike`
  * Containment - value appears in a reference set
    * `-in` , `-notin` , `-contains` , `-notcontains`
  * Type - object is of a given type
    * `-is` , `-isnot`


* [**Logical Operators**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logical_operators?view=powershell-7.2)
  * connect conditional statements into a single complex conditional
    * `-and` , `-or` , `-xor` , `-not` , `!`


* [**Redirection Operators**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_redirection?view=powershell-7.2)
  * send the output of a command or expression to a text file
    * `>` , `>>` , `2>` , `2>>` , and `2>&1`

* **[Split](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_split?view=powershell-7.2) and [Join](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_join?view=powershell-7.2) Operators**
  * divide and combine substrings
    * `-split` , `-join`


* [**Type Operators**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_type_operators?view=powershell-7.2)
  * find or change the .NET Framework type of an object
    * `-is` , `-isnot` , `-as`

* **Unary Operators**
  * increment or decrement values
    * `++` , `--`

* **Grouping operator** `( )`
  * let output from a command participate in an expression
    * ex. `(Get-Item *.txt).Count -gt 10`

* **Subexpression operator** `$( )`
  * Returns the result of one or more statements. For a single result, returns a scalar. For multiple results, returns an array
    * ex. `"Today is $(Get-Date)"`

* **Array subexpression operator** `@( )`
  * Returns the result of one or more statements as an array
    * ex. `$list = @(Get-Process | Select-Object -First 10; Get-Service | Select-Object -First 10 )`


* [**Hash table literal syntax**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_hash_tables?view=powershell-7.2) `@{}`
  * declare a hash table
    * ex. `${ Name = "Kyle" }`

* **Call operator** `&`
  * Runs a command, script, or script block

    ```ps1
    PS> $cmd = "Get-ExecutionPolicy"
    PS> & $cmd
    ```

* **Background operator** `&`
  * Runs the pipeline before it in the [background](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-7.2)
    * ex. `Get-Process -Name pwsh &`
      * ≈ `Start-Job -ScriptBlock {Get-Process -Name pwsh}`

* **Cast operator** `[ ]`
  * Converts or limits objects to the specified type
    * ex. `[DateTime] '2/20/88'`

* **Cast Notation**
  * ensure that a variable can contain only specific object types
    * ex. `[int]$number = 8`


* **Comma operator** `,`
  * creates an array or appends to the array being created
    * ex. `$myArray = 1,2,3`

* **Dot sourcing operator** `.`
  * Runs a script in the current scope
    * ex. `. c:\scripts\sample.ps1 1 2 -Also:3`

* [**Format operator**](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting) `-f`
  * Formats strings by using the format method of string objects
    * ex. `"{0} {1,-10} {2:N}" -f 1,"hello",[math]::pi`

* **Index operator** `[ ]`
  * Selects objects from indexed collections
    * ex: `$a = 1, 2, 3; $a[0]`

* **Pipeline operator** `|`
  * Sends ("pipes") the output of the command that precedes it to the command that follows it
    * ex. `Get-Process | Get-Member`

* **Pipeline chain operators** `&&` and `||`
  * Conditionally execute the right-hand side pipeline based on the success of the left-hand side pipeline.
    * ex. `Get-Process notepad && Stop-Process -Name notepad`


* **Range operator** `..`
  * Represents the sequential integers in an integer array
    * ex. `1..10 | ForEach-Object {Write-Output $_}`

* **Member access operator** `.`
  * Accesses the properties and methods of an object.
    * ex. `(Get-Process PowerShell).kill()`

* **Static member operator** `::`
  * Calls the static properties and methods of a .NET Framework class
    * ex. `[datetime]::Now`

* [**Ternary operator**](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_if?view=powershell-7.2#using-the-ternary-operator-syntax) `? <if-true> : <if-false>`
  * simplified if-else statement
    * ex. `$message = (Test-Path $path) ? "Path exists" : "Path not found"`

* **Null-coalescing operator** `??`
  * returns the value of its left-hand operand if it isn't null. Otherwise, it evaluates the right-hand operand and returns its result
    * ex. `$x = $null; $x ?? 100`

* **Null-coalescing assignment operator** `??=`
  * assigns the value of its right-hand operand to its left-hand operand only if the left-hand operand evaluates to null
    * ex. ``$todaysDate ??= (Get-Date).ToShortDateString()`

* **Null-conditional operators** `?.` and `?[]`
  * applies a member access (`?.`) or element access (`?[]) operation to its operand only if that operand evaluates to non-null; otherwise, it returns null
    * ex: `$a = @{ PropName = 100 }; ${a}?.PropName`


### Syntax - SS64

* [add value to array](https://ss64.com/ps/syntax-arrays.html)
* [foreach loop](https://ss64.com/ps/foreach.html)
* [foreach-object](https://ss64.com/ps/foreach-object.html)
* [> operator](https://ss64.com/ps/syntax-compare.html)
* [if statement](https://ss64.com/ps/if.html)
* [create function](https://ss64.com/ps/syntax-functions.html)
* [create function 2](https://www.microsoftpressstore.com/articles/article.aspx?p=2449030)
* [format table widths](https://stackoverflow.com/a/52174495/1366033)
* [Get-Date](https://ss64.com/ps/get-date.html)


## Visual Studio Code

* [Get started with PowerShell development in Visual Studio Code](https://devblogs.microsoft.com/scripting/get-started-with-powershell-development-in-visual-studio-code/)
* [Visual Studio Code editing features for PowerShell development](https://devblogs.microsoft.com/scripting/visual-studio-code-editing-features-for-powershell-development-part-2/)
* [Debugging PowerShell script in Visual Studio Code](https://devblogs.microsoft.com/scripting/debugging-powershell-script-in-visual-studio-code-part-1/)
* [Visual Studio Code for PowerShell 7 - PowerShell Team](https://devblogs.microsoft.com/powershell/visual-studio-code-for-powershell-7/)
* [PowerShell - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)


## Linting / Static Analysis

* [List of PSScriptAnalyzer rules](https://docs.microsoft.com/en-us/powershell/utility-modules/psscriptanalyzer/rules/readme?view=ps-modules)
  * [Approved Verbs for PowerShell Commands](https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands?view=powershell-7.2#common-verbs)
  * [AvoidUsingCmdletAliases](https://docs.microsoft.com/en-us/powershell/utility-modules/psscriptanalyzer/rules/AvoidUsingCmdletAliases?view=ps-modules)
* [PowerShell editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/powershell#_plaster)
* [Invoke-ScriptAnalyzer (PSScriptAnalyzer)](https://docs.microsoft.com/en-us/powershell/module/psscriptanalyzer/invoke-scriptanalyzer?view=ps-modules)


> The cmdlet 'Get-CommandExists' uses a plural noun. A singular noun should be used instead.


## Startup Error

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

* <kbd>Ctrl</kbd> + <kbd>Space</kbd> will trigger
* <kbd>Tab</kbd> will cycle through all applicable items if dropdown isn't open
* Typing will trigger
* Space will trigger

![Example](https://i.imgur.com/rQ9s3Sa.png)

* [Adding Argument Completion Support](http://www.powertheshell.com/argument-completion-in-powershell-3-0/)

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


* [Get definition of function](http://superuser.com/q/414036/180163)

    ```bash
    $function:test
    (Get-Command test).Definition

    $metadata = New-Object system.management.automation.commandmetadata (Get-Command Get-EventLog)
    [System.management.automation.proxycommand]::Create($MetaData) | out-file C:\get-process.ps1
    ```

### Function Parameters

[The PowerShell function – Parameters, data types, return values](https://4sysops.com/archives/the-powershell-function-parameters-data-types-return-values/)

#### Function Syntax

```bash
function [<scope:>]<name> [([type]$parameter1[,[type]$parameter2])]{

    param([type]$parameter1 [,[type]$parameter2])
    dynamicparam {<statement list>}

    begin {<statement list>}
    process {<statement list>}
    end {<statement list>}

}
```

#### Parameter Syntaxes

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


### Docs

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

* [`Get-Help`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-help?view=powershell-7.1)

```bash
Get-Help <command>
help <command>
man <command>
```

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

## Customize Prompt

* Utilities

  * [PSReadLine](https://github.com/PowerShell/PSReadLine)
  * [PSColors](https://github.com/ecsousa/PSColors)
  * [Oh my Posh](https://ohmyposh.dev/)
  * [powerline](https://github.com/powerline/powerline)
  * Powerline is a statusline plugin for vim, and provides statuslines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.

* Links

  * [Ultimate PowerShell Prompt Customization and Git Setup Guide](https://hodgkins.io/ultimate-powershell-prompt-and-git-setup)
  * [How to customize your PowerShell command prompt](https://www.networkadm.in/customize-pscmdprompt/)
  * [PowerShell - Customize the Prompt - Norlunn's Blog](https://www.norlunn.net/2019/10/07/powershell-customize-the-prompt/)
  * [You should be customizing your PowerShell Prompt with PSReadLine - Scott Hanselman's Blog](https://www.hanselman.com/blog/you-should-be-customizing-your-powershell-prompt-with-psreadline)
  * [How to make a pretty prompt in Windows Terminal with Powerline, Nerd Fonts, Cascadia Code, WSL, and oh-my-posh - Scott Hanselman's Blog](https://www.hanselman.com/blog/how-to-make-a-pretty-prompt-in-windows-terminal-with-powerline-nerd-fonts-cascadia-code-wsl-and-ohmyposh)
  * [Customizing Your PowerShell Prompt · dahlbyk/posh-git Wiki](https://github.com/dahlbyk/posh-git/wiki/Customizing-Your-PowerShell-Prompt)
  * [about_Prompts - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_prompts?view=powershell-7.1)


```bash
# either
Install-Module -Name PSReadLine -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck
Install-Module PSReadLine -AllowPrerelease -Force

code $PROFILE

# in profile.ps1
if ($host.Name -eq 'ConsoleHost')
{
    Import-Module PSReadLine
}
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

Get-PoshThemes
Set-PoshPrompt -Theme Pure
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme Paradox
```


### PS ReadLine

### Oh My Posh

[Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher](https://www.nerdfonts.com/)

```ps
winget install --id=JanDeDobbeleer.OhMyPosh  -e
```

## Articles

* [Code Layout and Formatting - PowerShell Practice and Style](https://poshcode.gitbook.io/powershell-practice-and-style/style-guide/code-layout-and-formatting)
* [Building PowerShell Modules by Brandon Olin](https://leanpub.com/building-powershell-modules)
* [WMI and CIM accelerators | Richard Siddaway's Blog](https://richardspowershellblog.wordpress.com/2018/05/26/wmi-and-cim-accelerators/)

## Resources

* [Get-PowerShellBlog: Bye Bye Backtick: Natural Line Continuations in PowerShell](https://get-powershellblog.blogspot.com/2017/07/bye-bye-backtick-natural-line.html)

* [Math Round](https://blogs.technet.microsoft.com/heyscriptingguy/2015/01/30/powertip-use-powershell-to-round-to-specific-decimal-place/)
* [Group & Aggregate](https://social.technet.microsoft.com/Forums/office/en-US/a7d96f2b-140b-49b5-a70f-f2df19c490ac/groupobject-and-measure-object?forum=winserverpowershell)
* [Group & Aggregate](https://stackoverflow.com/a/6000217/1366033)
* [PowerShell 101 From a Linux Guy](https://developer.rackspace.com/blog/powershell-101-from-a-linux-guy/)
* [Creating table using Powershell](http://blogs.msdn.com/b/rkramesh/archive/2012/02/02/creating-table-using-powershell.aspx)
* https://github.com/jefflomax/configure-iis-webapps-powershell/blob/master/configureIISWebApplications.ps1
* http://geekswithblogs.net/QuandaryPhase/archive/2013/02/24/create-iis-app-pool-and-site-with-windows-powershell.aspx
* http://surroundingthecode.wordpress.com/2011/02/24/scripting-iis7-application-pool-configuration-in-powershell/
* http://habaneroconsulting.com/insights/Set-the-Specific-Times-to-Recycle-an-Application-Pool-with-PowerShell#.VCR7lPldV8E
* http://serverfault.com/questions/347199/how-can-i-set-iis-application-pool-recycle-times-without-resorting-to-the-ugly-s
* http://stackoverflow.com/questions/18319961/how-can-i-set-iis-windows-auth-providers-with-powershell
* http://stackoverflow.com/questions/6847647/enabling-impersonation-in-iis-7-5-via-powershell
* http://technet.microsoft.com/en-us/library/hh867899.aspx
* http://blog.itsnotfound.com/2014/01/truefalse-boolean-values-in-powershell/
* http://geekswithblogs.net/QuandaryPhase/archive/2013/02/24/create-iis-app-pool-and-site-with-windows-powershell.aspx
* http://technet.microsoft.com/en-us/library/hh867899.aspx



## Questions

* [Full Listing of Installed Programs using Powershell](https://stackoverflow.com/q/53161112/1366033)
* [How can I uninstall an application using PowerShell?](https://stackoverflow.com/q/113542/1366033)
* [rename user directory](https://superuser.com/q/890812/180163)
  * [Rename Windows user account and profile folder](https://tinyapps.org/docs/rename-user-profile-folder.html)
  * [How to create new account with PowerShell on Windows 10](https://pureinfotech.com/create-new-user-account-powershell-windows-10/)


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

* [Powershell test if folder empty](https://stackoverflow.com/a/10550670/1366033)

    ```ps1
    Test-Path .\temp\*
    ```

* [Getting home directory?](https://stackoverflow.com/q/44575585/1366033)

    ```ps1
    $HOME
    ```

* [Automatic Variable `$HOME` vs Environment Variable `$Env:HOME`](https://superuser.com/q/1454263/180163)

  `$HOME` is preferred for cross-platform compatibility

  * [Automatic Variables](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_Automatic_Variables)
  * [Environment Variables](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables)

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

* [What does "%" (percent) do in PowerShell?](https://stackoverflow.com/questions/22846596/what-does-percent-do-in-powershell)

* [How to I remove the Powershell start text?](https://stackoverflow.com/a/48263119/1366033)

    ```bash
    pwsh.exe -nologo
    ```

* [PowerShell to remove text from a string](https://stackoverflow.com/q/19168475/1366033)

    ```bash
    "refs/heads/master" -replace "refs/heads/", ""
    # "master"
    ```

* Use AZ Table

    ```bash
    Install-Module AzTable
    Add-AzAccount
    ```


* PowerShell requires NuGet provider version 2.8.5.201 or newer to interact with NuGet-based repositories

* [Update powershell to the latest revision](https://stackoverflow.com/q/60524714/1366033)

    ```bash
    winget upgrade PowerShell
    ```

* [Create directory if it does not exist](https://stackoverflow.com/q/16906170/1366033)

    ```ps1
    New-Item -ItemType Directory -Force -Path C:\Path\That\May\Or\May\Not\Exist
    ```

* [What does `$($variableName)` mean in expandable strings in PowerShell?](https://stackoverflow.com/q/13615676/1366033)

    [Powershell Operators | SS64](https://ss64.com/ps/syntax-operators.html)

    ```ps1
    "Hello $name"
    # sub-expression operator
    "You have $(arr.Count) items remaining"
    ```

* [Difference between `ForEach` and `ForEach-Object`](https://stackoverflow.com/q/29148462/1366033)

  * [ForEach-Object](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/foreach-object?view=powershell-7.2)
  * [Foreach](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_foreach?view=powershell-7.2)

  ```ps1
  1..5 | ForEach-Object {$_}
  ForEach ($number in 1..5){$number}
  ```

* [Timing a command's execution in PowerShell](https://stackoverflow.com/q/3513650/1366033)

    ```ps1
    Get-History -Count 1 | Select-Object -First 1 -ExpandProperty Duration
    ```

* [How to pass a custom function inside a  `ForEach-Object` `-Parallel`](https://stackoverflow.com/q/61273189/1366033)

    ```ps1
    function hi { 'hi' }
    $a = get-command hi
    1..3 | foreach -parallel { & $using:a }
    ```


* [How to check if a cmdlet exists in PowerShell at runtime via script](https://stackoverflow.com/q/3919798/1366033)

  ```ps1
  function Check-Command($cmdName)
  {
      return [bool](Get-Command -Name $cmdName -ErrorAction SilentlyContinue)
  }
  ```

* [Equivalent of cmd's "where" in powershell](https://superuser.com/q/675837/180163)

  Use [`Get-Command`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-command?view=powershell-7.3)

  ```ps1
  (Get-Command git).Path
  ```

  **See Also**: [Equivalent of *Nix 'which' command in PowerShell?](https://stackoverflow.com/q/63805/1366033)



* [Powershell 'Move-Item' doesn't make directory if it doesn't exists](https://stackoverflow.com/q/13912038/1366033)

    ```ps1
    Function Move-Item-Parent([string]$path, [string]$destination) {
        New-Item $destination -ItemType Directory -Force
        Move-Item $path $destination
    }

    Move-Item-Parent $from $to
    ```

* [How to enter a multi-line command](https://stackoverflow.com/q/3235850/1366033)

    Use Pipe (`|`) or BackTicks (```)

    ```ps1
    Get-ChildItem |
    Select Name,Length
    ```

    ```ps1
    Get-ChildItem . `
        -Filter ".git" `
        -Recurse
    ```

* [Powershell get current script directory name only](https://stackoverflow.com/q/61520315/1366033)

    ```ps1
    (Get-Item -Path (Get-Location)).Name
    Split-Path -Path (Get-Location) -Leaf
    ```

* [Returning a value from within a ForEach in Powershell](https://stackoverflow.com/q/37557974/1366033)

    ```ps1
    $a.ForEach{ return $_.Name }
    ```

* [PowerShell difference between Write-Host vs Write-Output?](https://stackoverflow.com/q/19754069/1366033)

    ```ps1
    Write-Host "Hello World"   # writes to console
    Write-Output "Hello World" # writes to pipeline
    ```

    Also, `Write-Output` is implicitly called

* [How do I concatenate strings and variables in PowerShell?](https://stackoverflow.com/q/15113413/1366033)

    ```ps1
    Write-Host "$($assoc.Id) - $($assoc.Name) - $($assoc.Owner)"
    ```

* [PowerShell Round & Format Float to max 2 decimals?](https://stackoverflow.com/q/24037021/1366033)

    ```ps1
    [math]::round(1.111,2)
    ```

* [Powershell folder size of folders without listing Subdirectories](https://stackoverflow.com/q/26494744/1366033)

  ```ps1
  foreach ($d in gci -Directory -Force) {
    '{0,15:N0}' -f ((gci $d -File -Recurse -Force | measure length -sum).sum) + "`t`t$d"
  }
  ```


  ```ps1
  $dirs = Get-ChildItem -Directory
  $dirs | ForEach-Object {
      $size = (Get-ChildItem $_.Name -Force -Recurse | Measure-Object Length -Sum).Sum / 1Mb
      Return $_.Name + ' ' + [Math]::Round($size, 2)
  }
  ```

* [How do I get only directories using Get-ChildItem?](https://stackoverflow.com/q/3085295/1366033)

    ```ps1
    Get-ChildItem -Directory
    ```

* [Change directory in PowerShell](https://stackoverflow.com/q/41130310/1366033)

  > Unlike the `CMD.EXE CHDIR` or `CD` command, the PowerShell [`Set-Location`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location?view=powershell-7.2) cmdlet will change *both* drive and directory


* [Why use "Cmd /c Powershell" instead of just "Powershell"?](https://superuser.com/q/1246339/180163)


* [How to quietly remove a directory with content in PowerShell](https://stackoverflow.com/q/7909167/1366033)

    ```ps1
    Remove-Item myPath -Force -Recurse
    ```

* [Getting the path of %AppData% in PowerShell](https://stackoverflow.com/q/10132883/1366033)

```ps1
$env:APPDATA
$env:LOCALAPPDATA
```

* [Powershell -WindowStyle Hidden still shows a window briefly](https://github.com/PowerShell/PowerShell/issues/3028)

* [Flatten Nested JSON](https://stackoverflow.com/q/45829754/136603)

* [Running a command as Administrator using PowerShell?](https://stackoverflow.com/q/7690994/1366033)


    ```ps1
    #Requires -RunAsAdministrator
    ```

* [Convert json to object](https://stackoverflow.com/q/35863103/1366033)

    ```ps1
    Get-Content <jsonFile> | ConvertFrom-Json
    ```


* [What is the Linq.First equivalent in PowerShell?](https://stackoverflow.com/q/5360145)

  ```ps1
  (1,2,3) | Select-Object -First 1
  (1,2,3) | Select-Object -Index 0
  (1,2,3)[0]
  ```


* [Get registry key value](https://stackoverflow.com/q/15511809)

  Use [`Get-ItemPropertyValue`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-itempropertyvalue) - PSv5+

  ```ps1
  Get-ItemPropertyValue 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion' 'ProgramFilesDir'
  # C:\Program Files
  ```

  Use [`Get-ItemProperty`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-itemproperty?view=powershell-7.3)

  ```ps1
  (Get-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion' -Name 'ProgramFilesDir').ProgramFilesDir
  # C:\Program Files
  ```


* [Get registry subkeys](https://stackoverflow.com/a/37746096)

  ```ps1
  $profileKeys = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\*"
  $profileKeys = "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\*"
  Get-ItemProperty $profileKeys
  ```

  **See Also**: [Working with registry entries](https://docs.microsoft.com/en-us/powershell/scripting/samples/working-with-registry-entries?view=powershell-7.2)


* [Test if registry value exists](https://stackoverflow.com/q/5648931/1366033)

  ```ps1
  (Get-Item 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion' -EA Ignore).Property -contains 'ProgramFilesDir'
  ```

* [Set registry value](https://stackoverflow.com/q/6551224/1366033)

  Use [`Set-ItemProperty`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-itemproperty) or [`New-ItemProperty`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-itemproperty?view=powershell-7.3#-propertytype)  with []`RegistryValueKind` Enum](https://learn.microsoft.com/en-us/dotnet/api/microsoft.win32.registryvaluekind)

  ```ps1
  If ( !(Test-Path $thumbnailPath) ) { New-Item -Path $thumbnailPath -Force; };
  New-ItemProperty `
      -Path $thumbnailPath `
      -Name $thumbnailKey `
      -Value $thumbnailValue `
      -PropertyType "$([Microsoft.Win32.RegistryValueKind]::DWord)" `
      -Force;
  ```

* [Load all functions into PowerShell from a certain directory](https://stackoverflow.com/q/763799/1366033)

  ```ps1
  'G:\sync\Office\*.psm1' | gci | Import-Module
  ```

* [PowerShell module design - Export-ModuleMember](https://stackoverflow.com/q/22205103/1366033)

  ```ps1
  Export-ModuleMember -Function *
  ```

* [Relative path in Import-Module](https://stackoverflow.com/q/14382579/1366033)

  ```ps1
  Import-Module $PSScriptRoot\Script1.ps1
  ```

* [Powershell split() vs -split - what's the difference?](https://stackoverflow.com/q/23796959/1366033)

  ```ps1
  "1,2" -split ","
  "1,2".split(",")
  ```

* [Split a string with spaces](https://stackoverflow.com/q/41836526/1366033)

  [about Split](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_split?view=powershell-7.2)

  ```ps1
  "Hello World" -split " "
  ```


* [How do I force powershell to reload a custom module?](https://stackoverflow.com/q/39426477/1366033)

  ```ps1
  Import-Module -Force
  ```

* [Param list vs Param block](https://stackoverflow.com/q/61944141/1366033)

  * Interchangeable, but `param(...)` offers more options

* [Executing powershell with or without parenthesis](https://stackoverflow.com/q/26941644/1366033)

  * When you call a($svr, $usr) you're passing an array with the two values as the single value of the first parameter
  * *without* the enclosing `(...)` the arguments are parsed in argument mode, where, notably, strings needn't be quoted
  * *with* the enclosing `(...)`, are parsed in expression mode, where strings do need to be quoted.

* [How to define the return type / OutputType of a function](https://stackoverflow.com/q/57478715/1366033)

  ```ps1
  function SomeFunction
  {
      [OutputType([string])]
      param(
          [string]$SomeParameter
      )

      return $SomeParameter
  }
  ```

  * **Note**: `[OutputType()]` makes *no guarantees* as to the type of objects emitted during execution
    * It's simply a way for the author of a function to indicate the *intended output type*.


* [How to change a Windows username using the command prompt?](https://superuser.com/q/1159929/180163)

  ```bash
  Rename-LocalUser -Name "Kylem" -NewName "kylemit"
  ```

  * [`Rename-LocalUser`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.localaccounts/rename-localuser?view=powershell-5.1)


* [Ternary operator in PowerShell](https://stackoverflow.com/q/31341998/1366033)

  * Powershell 7 allows [ternary operators](https://docs.microsoft.com/en-us/powershell/scripting/whats-new/what-s-new-in-powershell-70?view=powershell-7#ternary-operator):

    ```ps1
    $message = (Test-Path $path) ? "Path exists" : "Path not found"
    ```

  * Earlier versions: PowerShell gives back values that haven't been assigned.

    ```ps1
    $a = if ($condition) { $true } else { $false }
    ```

  * Further Reading
    * [PowerShell inline If (IIf)](https://stackoverflow.com/q/25682507/1366033)
    * [PowerShell syntax for something like :? operator?](https://stackoverflow.com/q/52899849/1366033)
    * [PSAvoidUsingCmdletAliases fires on ternary operator](https://github.com/PowerShell/PSScriptAnalyzer/issues/1612)


* Check if Running As Admin

  * [Check if I'm running with administrator privileges?](https://serverfault.com/q/95431/176522)
  * [Detect if PowerShell is running as administrator](https://superuser.com/q/749243/180163)


  ```ps1
  ([Security.Principal.WindowsPrincipal] `
    [Security.Principal.WindowsIdentity]::GetCurrent() `
  ).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
  ```

* [Using Namespace in powershell](https://stackoverflow.com/q/1048954/1366033)

  [about Using](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_using?view=powershell-7)

  ```ps1
  using namespace System.Security.Principal
  [WindowsIdentity]::GetCurrent();
  ```

  or

  ```ps1
  #Requires -RunAsAdministrator
  ```


  * [`WindowsIdentity.GetCurrent`](https://docs.microsoft.com/en-us/dotnet/api/system.security.principal.windowsidentity.getcurrent?view=net-6.0)
  * [`WindowsPrincipal.IsInRole`](https://docs.microsoft.com/en-us/dotnet/api/system.security.principal.windowsprincipal.isinrole?view=net-6.0)
  * [`WindowsBuiltInRole.Administrator`](https://docs.microsoft.com/en-us/dotnet/api/system.security.principal.windowsbuiltinrole?view=net-6.0)


* [How do I get the current username in Windows PowerShell?](https://stackoverflow.com/q/2085744)

  ```ps1
  $env:UserName
  ```

* [How do I negate a condition in PowerShell?](https://stackoverflow.com/q/8095638/1366033)

  ```ps1
  -not $true
  !$true
  ```

* [Check if string contains substring](https://stackoverflow.com/q/18877580/1366033)

  ```ps1
  "abc" -match "b"
  "abc" -like "*b*"
  ```

* [Powershell match operator on cmdlet output OR variable name for pipeline output?](https://stackoverflow.com/q/73666512/1366033)

  ```ps1
  (echo abc | Select-String "b").Matches.Success # true
  ```

* [How to grep command output?](https://stackoverflow.com/q/1485215/1366033)

  ```ps1
  echo "abc" | findstr -i "b"
  ```

* Extract Regex Match

  ```ps1
  $input = "Prefix: {123}"
  $input | Select-String "{.*}" | Select-Object -ExpandProperty Matches | Select-Object -ExpandProperty Value
  ($input | Select-String "{.*}").Matches.Value
  [Regex]::Matches($input, "{.*}" ).Value
  ```

* [What's the equivalent of xargs in PowerShell?](https://stackoverflow.com/q/36428949/1366033)


* [Update XML file content](https://stackoverflow.com/q/16428559/1366033)

  ```ps1
  [xml]$xmlDoc = Get-Content "c:\file.xml"
  $xmlDoc.config.button.text = "Hello"
  $xmlDoc.Save("c:\file.xml")
  ```

* Delete File

  [Remove-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item)

  ```ps1
  Remove-Item "c:\file.xml"
  ```

* [How to select an XmlElement based on an attribute value?](https://stackoverflow.com/q/27841491/1366033)

  ```ps1
  [xml]$xmlDoc = Get-Content "c:\file.xml"
  $node = $xmlDoc.catalog.book | Where-Object { $_.id -eq 2 }
  ```

* [How to view command history](https://superuser.com/q/1000489/180163)

  ```ps1
  function Get-PSReadLineHistory
  {
      Get-Content (Get-PSReadlineOption).HistorySavePath
  }
  ```

* Top 10 Commands

  ```ps1
  Get-Content (Get-PSReadlineOption).HistorySavePath | Group-Object -NoElement | Sort-Object -Property Count -Descending | Select-Object -First 10
  ```

* [Move to the directory root](https://stackoverflow.com/q/58640721/1366033)

  ```cs
  > cd\
  ```

* [PowerShell equivalent of LINQ Any()?](https://stackoverflow.com/q/1499466/1366033)

  Use [`WhereOperatorSelectionMode`](https://docs.microsoft.com/en-us/dotnet/api/system.management.automation.whereoperatorselectionmode?view=powershellsdk-7.0.0)

  ```ps1
  (1, 2, 3).Where({
      Write-Host $_
      return $_ -gt 1
  }, [System.Management.Automation.WhereOperatorSelectionMode]::First).Count -gt 0
  # 1
  # 2
  # true
  ```

* [Best way to return values from a function that writes to STDOUT](https://stackoverflow.com/q/21232024/1366033)

  all non-captured output inside a function is returned, not just the argument of return

  write to the host or one of the other output streams

  ```ps1
  function Foo {
    Write-Host 'abc'
    return "def"
  }
  Foo
  # abc
  # def
  ```

  See Also: [Write-Output not working inside a callback](https://stackoverflow.com/q/25677197/1366033)


* [Selecting first n characters in PowerShell](https://stackoverflow.com/q/53020983/1366033)

  ```ps1
  $a.Substring(0, [Math]::Min($a.Length, 20))
  ```


* [How to use powershell to determine the frequency of objects in a collection based on a specific member](https://stackoverflow.com/q/55975372/1366033)

  ```ps1
  ('a','a','b') | Group-Object -NoElement | Sort-Object Count -Descending
  ```

* [Creating hard and soft links using PowerShell](https://stackoverflow.com/q/894430/1366033)

  Use [`New-Item`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-item)

  ```ps1
  New-Item -ItemType SymbolicLink|Junction|HardLink -Name Foo -Target Bar
  ```

  Use cmd prompt + [`mklink`](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mklink)

  ```ps1
  cmd /c mklink c:\path\to\symlink c:\target\file
  ```

  See Also: [The term 'mklink' is not recognized as the name of a cmdlet](https://superuser.com/q/98420/180163)

* [Find out whether a file is a symbolic link in PowerShell](https://stackoverflow.com/q/817794/1366033)

  Use [`Get-Item`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-item)

* [Check if an item exists without an error if it doesn't exist](https://stackoverflow.com/q/4362275/1366033)

  ```ps1
  Get-Item blah -ErrorAction SilentlyContinue
  ```

* [Creating new file with touch command in PowerShell](https://stackoverflow.com/q/32448174/1366033)

  ```ps1
  New-Item -Type File -Path $Path
  ```

  ```ps1
  function touch {
    Param(
      [Parameter(Mandatory=$true)]
      [string]$Path
    )

    if (Test-Path -LiteralPath $Path) {
      (Get-Item -Path $Path).LastWriteTime = Get-Date
    } else {
      New-Item -Type File -Path $Path -Force
    }
  }
  ```

* [Get count of all items in a folder by extension](https://stackoverflow.com/q/73884330/1366033)

  ```ps1
  Get-ChildItem -File -Recurse |
    Group-Object Extension -NoElement |
    Sort-Object Count -Descending
  ```

* [How do I find files by their extension in a specific directory and go through them with Power Shell?](https://stackoverflow.com/q/42034488/1366033)

  ```ps1
  Get-ChildItem $path -Recurse -Filter *.ext
  ```

* [How to fix truncated PowerShell output, even when I've specified -width 300](https://superuser.com/q/1049531/180163)

  ```ps1
  $data | Format-Table -AutoSize
  ```

* [Function to round integer or float up to closest increment in Powershell](https://stackoverflow.com/q/18226298/1366033)

  ```ps1
  Function Get-Increment([float] $value, [int] $increment=5){
      if($value -gt 1)
      {
        [Math]::Ceiling($value / $increment) * $increment;
      }
      else
      {
        [math]::Ceiling($value)
      }
  }
  ```

* [Count line lengths in file using powershell](https://stackoverflow.com/q/30139876/1366033)

  ```ps1
  Get-Content <file> | Group-Object -Property Length | Sort-Object -Property Name
  ```

* [How do I kill a process in Powershell](https://stackoverflow.com/q/41116361/1366033)

  ```ps1
  Stop-Process -Name testhost
  ```

  [`Stop-Process`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-process)


* [*.ps1 cannot be loaded because running scripts is disabled on this system](https://stackoverflow.com/a/26955050/1366033)


  ```ps1
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

* [How to exclude files and folders from Get-ChildItem in PowerShell?](https://stackoverflow.com/q/61934452/1366033)

  ```ps1
  Get-ChildItem $path -Recurse | Where-Object FullName -INotLike *obj*
  ```

* [Difference between using module, Import-Module, and #requires -Modules](https://stackoverflow.com/q/68455543/1366033)


* [How to send notifications or messages to user?](https://stackoverflow.com/q/71490603/1366033)

  * [Send a toast notification to logged user when running as Local System](https://stackoverflow.com/q/61971517/1366033)
  * [Windos/BurntToast](https://github.com/Windos/BurntToast)

  ```ps1
  Install-Module -Name BurntToast
  New-BurntToastNotification 
  ```

* [PowerShell show elapsed time](https://stackoverflow.com/q/10941756/1366033)

  ```ps1
  $timer = [Diagnostics.Stopwatch]::StartNew()
  $timer.Stop()
  [Math]::Floor($buildTimer.Elapsed.TotalSeconds)
  ```

* [PowerShell script to check the status of a URL](https://stackoverflow.com/q/20259251/1366033)

  ```ps1
  function Get-UrlStatusCode([string] $Url)
  {
      try
      {
          (Invoke-WebRequest -Uri $Url -UseBasicParsing -DisableKeepAlive).StatusCode
      }
      catch [Net.WebException]
      {
          [int]$_.Exception.Response.StatusCode
      }
  }

  $statusCode = Get-UrlStatusCode 'https://example.com/'
  ```

* [Safely converting string to bool in PowerShell](https://stackoverflow.com/q/27484682/1366033)

  ```ps1
  [bool]"" # False
  [bool]"a" # False
  [System.Convert]::ToBoolean(1) # True
  [System.Convert]::ToBoolean(0) # False
  [System.Convert]::ToBoolean("True")  # True
  [System.Convert]::ToBoolean("False") # False
  ```

* [PowerShell: How do I convert an array object to a string in PowerShell?](https://stackoverflow.com/q/7723584/1366033)

  ```ps1
  $a = 'This', 'is', 'a', 'cat'
  $a -join ' ' # This is a cat
  ```

* [How to split string by string in Powershell](https://stackoverflow.com/q/16435240/1366033)

  ```ps1
  $a = "This is a cat"
  $a -split ' ' # ('This', 'is', 'a', 'cat')
  ```

* [Select/map each item of a Powershell array to a new array](https://stackoverflow.com/q/8908879/1366033)

  ```ps1
  $nums = (1,2,3)
  $nums | ForEach-Object { $_ + 1 } # (2,3,4)
  ```

* [How to convert string to integer in PowerShell](https://stackoverflow.com/q/33707193/1366033)

  ```ps1
  $string = "1654"
  $integer = [int]$string
  ```

* [What does the & symbol in powershell mean?](https://stackoverflow.com/q/22074507/1366033)

  [**Call operator** `&`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators?view=powershell-7.3#call-operator-) AKA "Invocation Operator"

  > Runs a command, script, or script block

  ```ps1
  function SayHi() { Write-Host "Hello" }
  & SayHi
  ```

* [How do I capture the output into a variable from an external process in PowerShell?](https://stackoverflow.com/q/8097354/1366033)

    ```ps1
    $resp = gh auth status 2>&1
    $resp = cmd /c gh auth status '2>&1'
    ```


* [With PowerShell, how can I get Write-Debug output to appear in the console?](https://stackoverflow.com/q/45289719/1366033)

  Use [`$DebugPreference`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_Preference_Variables?view=powershell-7.3#debugpreference)

  ```ps1
  $DebugPreference = 'Continue'
  Write-Debug "Debug Stream"
  $DebugPreference = 'SilentlyContinue'
  ```

* [How to run a PowerShell script with verbose output?](https://stackoverflow.com/q/41324882/1366033)

  Use [`$VerbosePreference`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_Preference_Variables?view=powershell-7.3#verbosepreference)

  ```ps1
  $VerbosePreference = 'Continue'
  Write-Verbose "Verbose Stream"
  $VerbosePreference = 'SilentlyContinue'
  ```

* [How do I suppress standard error output in PowerShell?](https://stackoverflow.com/q/11969596/1366033)

  ```ps1
  & {
    Write-Error "Error Info" -ErrorAction Continue
  } 2>$null
  ```

* [How do I capture the output into a variable from an external process in PowerShell?](https://stackoverflow.com/q/8097354/1366033)

  Use [redirection](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_redirection?view=powershell-7.3) to divert additional streams to output stream

  | Operator | Description                                           | Syntax |
  | -------- | ----------------------------------------------------- | ------ |
  | `>`      | Send specified stream to a file.                      | `n>`   |
  | `>>`     | Append specified stream to a file.                    | `n>>`  |
  | `>&1`    | Redirects the specified stream to the Success stream. | `n>&1` |

  Use numbers based on [output streams](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_output_streams?view=powershell-7.3)

  | Stream # | Description            | Write Cmdlet        |
  | -------- | ---------------------- | ------------------- |
  | **1**    | **Success** stream     | `Write-Output`      |
  | **2**    | **Error** stream       | `Write-Error`       |
  | **3**    | **Warning** stream     | `Write-Warning`     |
  | **4**    | **Verbose** stream     | `Write-Verbose`     |
  | **5**    | **Debug** stream       | `Write-Debug`       |
  | **6**    | **Information** stream | `Write-Information` |
  | n/a      | **Progress** stream    | `Write-Progress`    |

  ```ps1
  $output = Write-All -ErrorAction Continue 2>&1
  ```

* [Capture program stdout and stderr to separate variables](https://stackoverflow.com/q/24222088/1366033)

  ```ps1
  function Write-All() {
    Write-Output "Host Info"
    Write-Error "Error Info" 
  }

  $output = Write-All -ErrorAction Continue 2>&1
  $stdout = $output | Where-Object { $_ -isnot [System.Management.Automation.ErrorRecord] }
  $stderr = $output | Where-Object { $_ -is [System.Management.Automation.ErrorRecord] }
  ```

* [Powershell hashtable keys with special characters](https://stackoverflow.com/q/15708203/1366033)

  ```ps1
  $h=@{'application/pdf'='application/pdf'}
  $h["application/pdf"] # application/pdf
  $h."application/pdf"  # application/pdf
  ```

* [Format-Table on Array of Hash Tables](https://stackoverflow.com/q/20874464/1366033)

  Convert to [`[PSCustomObject]`](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-pscustomobject?view=powershell-7.3) first

  ```ps1
  $table = @(
      @{Name="A";Age=12},
      @{Name="B";Age=21}
  )
  $table | ForEach-Object { [PSCustomObject]$_ } | Format-Table -AutoSize
  ```

* ["rm -rf" equivalent for Windows PowerShell?](https://stackoverflow.com/q/61573115/1366033)

  ```ps1
  Remove-Item -Recurse -Force -Path app
  ```

* [Is it possible to open a Windows Explorer window from PowerShell?](https://stackoverflow.com/q/320509/1366033)

  Use [`explorer`](https://ss64.com/nt/explorer.html)

  ```ps1
  explorer C:\Users
  ```

  Use [`Invoke-Item`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/invoke-item?view=powershell-7.3)

  ```ps1
  Invoke-Item C:\Users
  ```

* [How do I use Join-Path to combine more than two strings into a file path?](https://stackoverflow.com/q/25880122/1366033)


  Use [`Join-Path`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/join-path)

  ```ps1
  $root = "C:\Temp"
  $file = "data.csv"
  $fullPath = Join-Path $root $file
  # C:\Temp\data.csv
  ```

* [What is the Linq.First equivalent in PowerShell?](https://stackoverflow.com/q/5360145/1366033)

  Use [`WhereOperatorSelectionMode` Enum](https://learn.microsoft.com/en-us/dotnet/api/system.management.automation.whereoperatorselectionmode?view=powershellsdk-7.3.0)

  ```ps1
  $mode = [System.Management.Automation.WhereOperatorSelectionMode]::First
  (1..9).Where({ $_ -gt 3}, $mode) # 4
  ```

* [Advanced Functions - Input processing methods](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_methods?view=powershell-7.3#input-processing-methods)

  ```ps1
  Function Test-Demo
  {
    Param ($Param1)
    Begin{ Write-Output "Starting"}
    Process{ Write-Output "processing $_ with $Param1"}
    End{ Write-Output "Ending"}
  }

  $output = Write-Output Testing1, Testing2 | Test-Demo Sample

  # Starting
  # processing Testing1 with Sample
  # processing Testing2 with Sample
  # Ending
  ```

* [Pipe complete array-objects instead of array items one at a time?](https://stackoverflow.com/q/29973212/1366033)

  Use [`Write-Output -NoEnumerate`](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-arrays?view=powershell-7.2#write-output--noenumerate)

  ```ps1
  $data = @('red','green','blue')

  $data | Get-Member
  # TypeName: System.String

  Write-Output -NoEnumerate $data | Get-Member
  # TypeName: System.Object[]
  ```

  Use [Comma operator `,`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators#comma-operator-)

  ```ps1
  $data = @('red','green','blue')

  , $data | Get-Member
  # TypeName: System.Object[]
  ```

* [Can LINQ be used in PowerShell?](https://stackoverflow.com/q/38360545/1366033)

  Mostly, use built in functions (`Select-Object`, `Where-Object`, `Sort-Object`, etc)

  ```ps1
  $data = 0..5
  $func = [Func[object,bool]]{ param($x) $x -gt 3 }
  $result = [System.Linq.Enumerable]::Where($data, $func)
  # (4,5)
  ```

  **Further Reading**

  * [High Performance PowerShell with LINQ - Simple Talk](https://www.red-gate.com/simple-talk/sysadmin/powershell/high-performance-powershell-linq/#post-71022-_Toc482783752)
  * [PowerShell One-Liners: Collections, Hashtables, Arrays and Strings - Simple Talk](https://www.red-gate.com/simple-talk/sysadmin/powershell/powershell-one-liners--collections,-hashtables,-arrays-and-strings/#fifth)


* [PowerShell equivalent of LINQ Any()?](https://stackoverflow.com/q/1499466/1366033)

  ```ps1
  function Test-Any() { 
    begin { 
      $any = $false
    } 
    process { 
      if ($_ -eq $true) {
        $any = $true
      }
    } 
    end { 
      Write-Output $any
    } 
  }

  @($true, $false) | Test-Any  # True
  @($false, $false) | Test-Any # False
  ```

* [What is the PowerShell equivalent of LINQ's All()?](https://stackoverflow.com/q/35258183/1366033)

  ```ps1
  function Test-All() { 
    begin { 
      $all = $true
    } 
    process { 
      if ($_ -ne $true) {
        $all = $false
      }
    } 
    end { 
      Write-Output $all
    } 
  }

  @($true, $false) | Test-All  # False
  @($true, $true) | Test-All   # True
  ```

* [Capturing command output in Powershell as string instead of array of strings](https://stackoverflow.com/q/21028162/1366033)

  Use [`Out-String`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-string)

  ```ps1
  (Get-Process).GetType()              # Object[]
  (Get-Process | Out-String).GetType() # String
  ([string](Get-Process)).GetType()    # String
  ((Get-Process) -join "`n").GetType() # String
  ```


* [If strings starts with in PowerShell](https://stackoverflow.com/q/35654569/1366033)

  Use [`String.StartsWith`](https://learn.microsoft.com/en-us/dotnet/api/system.string.startswith?view=net-7.0#system-string-startswith(system-string))

  ```ps1
  "123".StartsWith("1") # True
  "123".StartsWith("2") # False
  ```

* [Find specific String in Text file](https://stackoverflow.com/q/41871147/1366033)

  ```ps1
  Select-String -Path C:\Temp\File.txt -Pattern "Test"
  ```

* [Append to text file](https://stackoverflow.com/q/28812239/1366033)

  Use [`Add-Content`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/add-content?view=powershell-7.3)

  ```ps1
  Add-Content -Path C:\temp.txt -Value "hello"
  ```

  Use [`Out-File -Append`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file?view=powershell-7.3#-append)

  ```ps1
  "hello" | Out-File -FilePath C:\temp.txt -Append
  ```

* [How do I define a function in a file and call it from the PowerShell commandline?](https://stackoverflow.com/q/6016436/1366033)
  
  Use [Dot Source Notation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scopes?view=powershell-5.1#using-dot-source-notation-with-scope)

  ```ps1
  . .\MyFunctions.ps1
  ```
