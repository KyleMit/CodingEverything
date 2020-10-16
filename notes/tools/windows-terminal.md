# Windows Terminal

## System Fonts

[Programming Fonts](https://app.programmingfonts.org/#firacode)
[Fira Code](https://github.com/tonsky/FiraCode)

[Monospaced Programming Fonts with Ligatures](https://www.hanselman.com/blog/MonospacedProgrammingFontsWithLigatures.aspx)

[VS Code Font Ligatures[(https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions#manually-editing-settingsjson)

```json
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
```

![fira code ligatures](https://github.com/tonsky/FiraCode/raw/master/showcases/all_ligatures.png)


[Window Terminal (GitHub)](https://github.com/microsoft/terminal)

## Customize Windows Terminal

[How to customize the new Windows Terminal with Visual Studio Code](https://dev.to/expertsinside/how-to-customize-the-new-windows-terminal-with-visual-studio-code-56b1)
[The new Windows Terminal](https://nickymeuleman.netlify.com/blog/windows-terminal)
[Roll Your Own Color Scheme in Windows Terminal](https://dev.to/teckert/roll-your-own-color-scheme-in-windows-terminal-466b)
[Amend Color array to typed values #742](https://github.com/microsoft/terminal/pull/742)
[Windows Terminal: Building a better command line experience for developers](https://www.youtube.com/watch?v=KMudkRcwjCw)
[How to add a command line to the Windows Terminal app](https://www.addictivetips.com/windows-tips/add-a-command-line-windows-terminal-app/)
[Can't remove default profiles · Issue #4910 · microsoft/terminal](https://github.com/microsoft/terminal/issues/4910)

```json
{
  "name": "Classic Powershell",
  "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  "hidden": true
}
```

## Terminal Color Schemes

[Iterm2-color-schemes](https://iterm2colorschemes.com/)
[Terminal Color Scheme Designer](https://terminal.sexy/)
[Terminal Color Tool](https://github.com/microsoft/terminal/tree/v0.3.2171.0/src/tools/ColorTool)

## `profiles.json` syntax

[adding profiles.json documentation #883](https://github.com/microsoft/terminal/pull/883)
[Navigating the new Windows Terminal capabilities and code](http://timheuer.com/blog/archive/2019/05/13/building-windows-terminal-navigating-source-and-profile-settings.aspx)
[Terminal - Profile.cpp](https://github.com/microsoft/Terminal/blob/master/src/cascadia/TerminalApp/Profile.cpp)
[`profiles.schema.json`](https://gist.github.com/davidwin/dad0126d20c53134851a2eb0b3437dfb)

## Tab Titles

[Formerly](https://github.com/microsoft/terminal/issues/608#issuecomment-506009571)

```json
"commandline" : "cmd.exe /k \"title cmd\"",
"commandline" : "powershell.exe -NoExit -Command \"& {$host.ui.RawUI.WindowTitle = 'ps'}\"",
"commandline" : "python.exe -i -c \\\"import ctypes; ctypes.windll.kernel32.SetConsoleTitleW('py')\\\""
```

[Add support for setting a profile's tab title](https://github.com/microsoft/terminal/pull/1358)

```json
"commandline": "cmd.exe",
"name": "cmd",
"tabTitle": "cmd",
```


## Terminals

### cmder

[cmder](https://github.com/cmderdev/cmder)

## Powershell Core

[Install Powershell Core](https://github.com/powershell/powershell)



## Upload JSON Schema Definition

[https://json-schema.org/]
[http://schemastore.org/json/]
[https://jsonschema.net/]

## Attach Schema

```json
"$schema": "https://aka.ms/terminal-profiles-schema",
```

* **Unofficial**: <https://gist.githubusercontent.com/davidwin/dad0126d20c53134851a2eb0b3437dfb/raw/85e2ce051ec59916be0c07dda61f621f56a2ca33/profiles.schema.json>
* **Official**: <https://aka.ms/terminal-profiles-schema>

[Draft 2019-09 schemas are not yet fully supported terminal in settings · Issue #7683](https://github.com/microsoft/terminal/issues/7683)

## Clink

[Clink](http://mridgers.github.io/clink/) - Powerful Bash-style command line editing for cmd.exe


## Azure Cloud Shell

https://microsoft.com/devicelogin


> Welcome to Azure Cloud Shell
>
> Type `az` to use Azure CLI
> Type `help` to learn about Cloud Shell


## Powershell

https://aka.ms/powershell

[How to I remove the Powershell start text?](https://stackoverflow.com/a/48263119/1366033)

```bash
pwsh.exe -nologo
```
