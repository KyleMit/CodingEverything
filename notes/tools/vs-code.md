# Visual Studio Code

## Docs

### User Interface

[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface)
[microsoft/monaco-editor](https://github.com/microsoft/monaco-editor)

### Github

[Working with GitHub in VS Code](https://code.visualstudio.com/docs/editor/github)

### Tasks

[Tasks](https://code.visualstudio.com/docs/editor/tasks)

### Editing

* [Formatting](https://code.visualstudio.com/docs/editor/codebasics#_formatting)

Format Document - <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>
Format Selection - <kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>F</kbd>

### Intellisense

[Customizing IntelliSense](https://code.visualstudio.com/docs/editor/intellisense#_customizing-intellisense)

### Debugging

[Launch Configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

![launch configurations](/assets/notes/vscode/launch-configurations.png)

[JavaScript projects (jsconfig.json)](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_javascript-projects-jsconfigjson)

[What is the pwa-node type launch configuration on VSCode?](https://stackoverflow.com/q/63442436/1366033)

## QnA

* [Cycle through tabs](https://stackoverflow.com/a/38978993/1366033)



## Custom Commands

## Stack Overflow

* [How to automate a simple regex-find and replace in VS Code?](https://stackoverflow.com/q/49632016/1366033)
* [Running simple terminal commands in command palette VS Code](https://stackoverflow.com/q/49960452/1366033)
* [How to create custom commands in VS Code?](https://stackoverflow.com/q/49178842/1366033)
* [Add a custom command in VS Code Command Palette](https://stackoverflow.com/q/50472691/1366033)

## Extensions

* [macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros)
* [Command Runner](https://marketplace.visualstudio.com/items?itemName=edonet.vscode-command-runner)
* [multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command)
* [macro-commander (Command Runner)](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.macro-commander)
* [Power Tools](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools)
* [Script Commands](https://marketplace.visualstudio.com/items?itemName=mkloubert.vs-script-commands)
* [Edit with Shell Command](https://marketplace.visualstudio.com/items?itemName=ryu1kn.edit-with-shell)

## Docs

* [Keybinding](https://code.visualstudio.com/docs/getstarted/keybindings)
* [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
* [Tasks in Visual Studio Code](https://code.visualstudio.com/docs/editor/tasks)
* [Extension API | Visual Studio Code Extension API](https://code.visualstudio.com/api)

## Forums

* [Macro like keybindings #871](https://github.com/microsoft/vscode/issues/871)
* [Macro recording - Issue #4490 - microsoft/vscode](https://github.com/Microsoft/vscode/issues/4490)


## Settings

[SF Telemetry](https://developer.salesforce.com/tools/vscode/en/faq/telemetry)

```json
{ "salesforcedx-vscode-core.telemetry.enabled": false }
```

[How to disable telemetry reporting](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting)

```json
{ "telemetry.enableTelemetry": false }
```

[Tips > Diff](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_diffs)

```json
{ "diffEditor.renderSideBySide": false }
```

[Pinned tabs: add a setting to show more context #98161](https://github.com/microsoft/vscode/issues/98161#issuecomment-690104534)

## Open File Side by Side

* [How do you open file in split editor in VSCode?](https://stackoverflow.com/q/55816591/1366033)
* [VSCode: What is the command to open the selection in a new windows (vertical split?)](https://stackoverflow.com/q/55767160/1366033)
* [vscode-docs/v1_44.md at vnext · microsoft/vscode-docs](https://github.com/microsoft/vscode-docs/blob/vnext/release-notes/v1_44.md#quick-open-rewrite)
* [Customize the key for "open to side" in quickopen window](https://github.com/microsoft/vscode/issues/91018)
* [Add a command for "Open to Side" from quick open](https://github.com/microsoft/vscode/issues/43059)


* [Breaking up HTML tags in JSX upon save · Issue #452](https://github.com/prettier/prettier-vscode/issues/452)

    ```json
    "beautify.ignore": [
        "**/*.js",
        "**/*.jsx"
    ]
    "files.associations": {
        "*.js": "javascriptreact"
    }
    ```

[Exclude directory from "Explore" tab?](https://stackoverflow.com/q/33258543/1366033)


* <kbd>Ctrl</kbd> + <kbd>R</kbd> is not working

[Microsoft/**vscode-npm-scripts**](https://github.com/Microsoft/vscode-npm-scripts) - defines a chording keyboard shortcut for the R key

[Codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

* [Disable annoying source code modification indication](https://stackoverflow.com/q/48401967/1366033)


```json
{
    "gitlens.mode.active": "zen"
}
```

* [Allow hiding the buttons in the tab bar line and in the panel title bar #46403](https://github.com/microsoft/vscode/issues/46403)

  * Install [Customize UI](https://marketplace.visualstudio.com/items?itemName=iocave.customize-ui)

    ```json
    "customizeUI.stylesheet": {
        ".editor-actions .codicon-compare-changes": "display: none !important;",
        ".editor-actions .codicon-open-preview": "display: none !important;",
        ".editor-actions .codicon-split-horizontal": "display: none !important;",
        ".editor-actions .codicon-toolbar-more": "display: none !important;",
        "[title='Open Settings (UI)']::before": "content: '\\eb52';",
        "[title='Open Settings (JSON)']::before": "content: '\\eb0f';"
    }
    ```


* Title bar zoom
  * [merging menu/titlebar](https://github.com/microsoft/vscode/pull/55100)
  * [Changing window.zoomLevel makes the opposite effect on the custom title bar menus](https://github.com/Microsoft/vscode/issues/54885)
  * [Custom Title Bar behaves strangely when scaling up/down](https://github.com/microsoft/vscode/issues/54575)
  * [Menus and context menu are not zooming in with the rest of the UI](https://github.com/microsoft/vscode/issues/17180)
  * [Mac title bar has incorrect size after reload](https://github.com/microsoft/vscode/issues/103591)


* [How to make all line endings (EOLs) in all files in Visual Studio Code, UNIX like?](https://stackoverflow.com/q/48692741/1366033)

```json
{
    "files.eol": "\n"
}
```


