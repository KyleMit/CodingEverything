# Visual Studio Code

## Alternatives

* [IntelliJ IDEA](https://www.jetbrains.com/idea/)
* [TextMate](https://macromates.com/)
* [Sublime Text](https://www.sublimetext.com/)
* Cloud
  * [Cloud9](https://aws.amazon.com/cloud9/)

## Keyboard Shortcuts / Hot Keys / Settings / Bindings / Mappings / Commands

* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> - Command Pallette
* <kbd>Ctrl</kbd> + <kbd>P</kbd> - Find File
* <kbd>Alt</kbd> - Show Menu
* <kbd>Ctrl</kbd> + <kbd>E</kbd> - View: Toggle Sidebar Visibility
* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> - View: Toggle 2nd Side Panel
* <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> - Bookmarks: Toggle

## Versions / Releases

* [Visual Studio Code January 2022](https://code.visualstudio.com/updates/v1_64)
  * [VS Code 1.64 Release Party](https://www.youtube.com/watch?v=g2UC0FmbYSY)

## Docs

* [Keybinding](https://code.visualstudio.com/docs/getstarted/keybindings)
* [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
* [Tasks in Visual Studio Code](https://code.visualstudio.com/docs/editor/tasks)
* [Extension API | Visual Studio Code Extension API](https://code.visualstudio.com/api)
* [Integrated Terminal / Profiles](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-profiles)

  ```bash
  {
    "terminal.integrated.profiles.windows": {
      "My PowerShell": {
        "path": "pwsh.exe",
        "args": ["-noexit", "-file", "${env:APPDATA}PowerShellMy-init-script.ps1"]
      }
    },
    "terminal.integrated.defaultProfile.windows": "My PowerShell"
  }
  ```

## User Interface

[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface)
[microsoft/monaco-editor](https://github.com/microsoft/monaco-editor)

## Github

[Working with GitHub in VS Code](https://code.visualstudio.com/docs/editor/github)


## Typings

* [ATA - Automatic Type Acquisition](https://code.visualstudio.com/docs/languages/javascript#_automatic-type-acquisition)
* [jQuery Intellisense in VS Code](https://stackoverflow.com/q/33902077/1366033)


## Tasks

* [Tasks](https://code.visualstudio.com/docs/editor/tasks)
* [VS Code Tasks](https://code.visualstudio.com/docs/editor/tasks)
* [Is it possible to assign different shortcuts to different tasks in VS Code?](https://stackoverflow.com/q/30057191/1366033)
* [Can I automatically start a task when a folder is opened?](https://stackoverflow.com/q/34103549/1366033)
* [Launching a website via command line](https://stackoverflow.com/a/23039509/1366033)


Type `task·`

`task.json`

* **label**: The task's label used in the user interface.
* **type**: The task's type.
  * `shell` - the command is interpreted as a shell command (for example: `bash`, `cmd`, or `PowerShell`)
  * `process` - the command is interpreted as a process to execute.
* **command**: The actual command to execute.
* **windows**: Any Windows specific properties - overrides default on windows
* **group**: Defines to which group the task belongs.
  * for example: `test` or `build`
* **presentation**: Defines how the task output is handled in the user interface.
  * `reveal` - Integrated Terminal showing the output is `always` revealed
  * `panel` - A `new` terminal is created on every task run.
* **options**: Options can be set per task but also globally or per platform. Environment variables configured here can only be referenced from within your task script or process and will not be resolved if they are part of your args, command, or other task attributes. Override the defaults for:
  * `cwd` (current working directory)
  * `env` (environment variables) or
  * `shell` (default shell).
* **runOptions**: Defines when and how a task is run.



### Example

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run tests",
      "type": "shell",
      "command": "./scripts/test.sh",
      "windows": {
        "command": ".\\scripts\\test.cmd"
      },
      "group": "test",
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
```

## Editing

* [Formatting](https://code.visualstudio.com/docs/editor/codebasics#_formatting)

Format Document - <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>
Format Selection - <kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>F</kbd>

## Intellisense

[Customizing IntelliSense](https://code.visualstudio.com/docs/editor/intellisense#_customizing-intellisense)

## Debugging

[Launch Configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

![launch configurations](/assets/notes/vscode/launch-configurations.png)

[JavaScript projects (jsconfig.json)](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_javascript-projects-jsconfigjson)

[What is the pwa-node type launch configuration on VSCode?](https://stackoverflow.com/q/63442436/1366033)

[Debug npm script](https://stackoverflow.com/a/64627874/1366033)


## Run Custom Commands / Macros

### Stack Overflow

* [How to automate a simple regex-find and replace in VS Code?](https://stackoverflow.com/q/49632016/1366033)
* [Running simple terminal commands in command palette VS Code](https://stackoverflow.com/q/49960452/1366033)
* [How to create custom commands in VS Code?](https://stackoverflow.com/q/49178842/1366033)
* [Add a custom command in VS Code Command Palette](https://stackoverflow.com/q/50472691/1366033)

### Extensions

* [macros](https://marketplace.visualstudio.com/items?itemName=geddski.macros)
* [Command Runner](https://marketplace.visualstudio.com/items?itemName=edonet.vscode-command-runner)
* [multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command)
* [macro-commander (Command Runner)](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.macro-commander)
* [Power Tools](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools)
* [Script Commands](https://marketplace.visualstudio.com/items?itemName=mkloubert.vs-script-commands)
* [Edit with Shell Command](https://marketplace.visualstudio.com/items?itemName=ryu1kn.edit-with-shell)


### Github Issues

[Macro recording · Issue #4490](https://github.com/Microsoft/vscode/issues/4490)


## Extension View Filters

[Extension View Filters](https://code.visualstudio.com/docs/editor/extension-gallery#_extensions-view-filters)

* `@builtin` - Show extensions that come with VS Code. Grouped by type (Programming Languages, Themes, etc.).
* `@disabled` - Show disabled installed extensions.
* `@installed` - Show installed extensions.
* `@outdated` - Show outdated installed extensions. A newer version is available on the Marketplace.
* `@enabled` - Show enabled installed extensions. Extensions can be individually enabled/disabled.
* `@recommended` - Show recommended extensions. Grouped as Workspace specific or general use.
* `@category` - Show extensions belonging to specified category. Below are a few of supported categories. For a complete list, type @category and follow the options in the suggestion list:


## Open File Side by Side

* [How do you open file in split editor in VSCode?](https://stackoverflow.com/q/55816591/1366033)
* [VSCode: What is the command to open the selection in a new windows (vertical split?)](https://stackoverflow.com/q/55767160/1366033)
* [vscode-docs/v1_44.md at vnext · microsoft/vscode-docs](https://github.com/microsoft/vscode-docs/blob/vnext/release-notes/v1_44.md#quick-open-rewrite)
* [Customize the key for "open to side" in quickopen window](https://github.com/microsoft/vscode/issues/91018)
* [Add a command for "Open to Side" from quick open](https://github.com/microsoft/vscode/issues/43059)


## Articles

* [VS Code Can Do That?](https://www.vscodecandothat.com/)
* [Learn these keyboard shortcuts to become a VS Code ninja](https://blog.logrocket.com/learn-these-keyboard-shortcuts-to-become-a-vs-code-ninja/)
* [VS Code hacks to boost your productivity](https://www.freecodecamp.org/news/here-are-some-super-secret-vs-code-hacks-to-boost-your-productivity-20d30197ac76/)

## Questions

* [Is there any way to set environment variables in Visual Studio Code?](https://stackoverflow.com/a/55325890/1366033)

  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Launch",
        "envFile": "${workspaceFolder}/.env"
      }
    ]
  }
  ```

* [Show project folder in title bar for Visual Studio Code](https://stackoverflow.com/q/38483687/1366033)

* [Configure Window Title](https://code.visualstudio.com/updates/v1_10#_configurable-window-title)

    ```json
    {
        "window.title": "${rootName}${separator}${activeEditorShort}${dirty}"
    }
    ```

* [Remove trailing spaces automatically or with a shortcut](https://stackoverflow.com/q/30884131/1366033)

    ```json
    {
        "files.trimTrailingWhitespace": true
    }
    ```

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

* [Exclude directory from "Explore" tab?](https://stackoverflow.com/q/33258543/1366033)

* [Choose folders to be ignored during search in VS Code](https://stackoverflow.com/q/29971600/1366033)

  ```json
  {
    "search.exclude": {
      "**/node_modules": true,
    },
  }
  ```

* <kbd>Ctrl</kbd> + <kbd>R</kbd> is not working

* [Microsoft/**vscode-npm-scripts**](https://github.com/Microsoft/vscode-npm-scripts) - defines a chording keyboard shortcut for the R key

* [Codicons](https://microsoft.github.io/vscode-codicons/dist/codicon.html)

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

* Customize Squiggly Error

  ```css
  .monaco-editor .squiggly-error {
      background: #820f0f38;
  }
  .monaco-editor .squiggly-warning {
      background: #ffff0024;
  }
  .monaco-editor .squiggly-info {
    background: #7373f840;
  }
  ```

  ```json
  "customizeUI.stylesheet": {
      ".monaco-editor .squiggly-error": "background: #820f0f38;",
      ".monaco-editor .squiggly-warning": "background: #ffff0024;",
      ".monaco-editor .squiggly-info": "background: #7373f840;"
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


* [REST Client - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
  * Languages
    * cURL
    * [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html)
  * Select Endpoint
    * Symbol Lookup - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>
  * Send Request
    * Click Link or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd>
  * [Native .env file support?](https://github.com/Huachao/vscode-restclient/issues/418)



* [SF Telemetry](https://developer.salesforce.com/tools/vscode/en/faq/telemetry)

  ```json
  { "salesforcedx-vscode-core.telemetry.enabled": false }
  ```

* [How to disable telemetry reporting](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting)

  ```json
  { "telemetry.enableTelemetry": false }
  ```

* [Tips > Diff](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_diffs)

  ```json
  { "diffEditor.renderSideBySide": false }
  ```

* [Pinned tabs: add a setting to show more context #98161](https://github.com/microsoft/vscode/issues/98161#issuecomment-690104534)

* [Visual Studio Code Tab Key does not insert a tab](https://stackoverflow.com/q/35519538/1366033)

  * **Toggle Tab Key Moves Focus**


* [Collapse all methods in Visual Studio Code](https://stackoverflow.com/q/42660670/1366033)

  Fold Level


* [Turn Off Whole Line Copy in Visual Studio Code](https://stackoverflow.com/q/39322024/1366033)

  ```json
  "editor.emptySelectionClipboard": false
  ```

* [VSCode remove warnings from problems tab](https://stackoverflow.com/a/53975985/1366033)

* [Select Next Match of Current Text](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor) - `editor.action.selectHighlights`


  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>

* [MD Lint - Allow trailing punctuation in Header](https://github.com/DavidAnson/vscode-markdownlint/issues/54)

  ```json
  "markdownlint.config": {
      "MD026": {"punctuation": "?"}
  },
  ```

* [Ignore whitespace in Visual Studio Code git diff view](https://stackoverflow.com/a/42038876/1366033)

  ```json
  "diffEditor.ignoreTrimWhitespace": true,
  ```


* ["editor.formatOnSave": false not working](https://github.com/microsoft/vscode/issues/30839)

  Due to [JS-CSS-HTML Formatter](https://marketplace.visualstudio.com/items?itemName=lonefy.vscode-JS-CSS-HTML-formatter)

  `~.vscode\extensions\lonefy.vscode-js-css-html-formatter-0.2.3\out\src\formatter.json`

  ```json
  {
    "onSave": true,
  }
  ```

* [Prevent same file opening twice](https://stackoverflow.com/q/39890926/1366033)

  ```json
  "workbench.editor.revealIfOpen": true
  ```

* [How to adjust the position of the internal terminal](https://stackoverflow.com/q/51202632/1366033)


* How to clear the entire terminal

  * [How to clear terminal scrollback buffer](https://stackoverflow.com/q/61696345/1366033)
  * [How to clear the entire terminal (PowerShell)](https://stackoverflow.com/q/52127653/1366033)


* Open All Files at Once

  * [Open Multiple Files](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-multiple-files)

  1. Open Command Palette
  2. Type `Open Multiple Files`
  3. Type glob ex. `**/*.md`

  > *alt*: [Open Matching Files](https://marketplace.visualstudio.com/items?itemName=bcanzanella.openmatchingfiles)

* [Autofix Markdown Lint Errors](https://github.com/DavidAnson/markdownlint/issues/80)


  ```json
  {
    "key": "ctrl+alt+f",
    "command": "markdownlint.fixAll"
  }
  ```

  Or autofix on save

  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.markdownlint": true
  }
  ```

* [List of all available commands in VSCode](https://stackoverflow.com/q/37844144/1366033)

  Browse via Keyboard Shortcuts Window

  or

  In extension, call `vscode.commands.getCommands()`

* [VSCode some shortcuts not working properly](https://stackoverflow.com/q/58946149/1366033)

  Run > `Developer: Toggle Keyboard Shortcuts Troubleshooting`

* [Change keyboard shortcut bindings in Visual Studio Code?](https://stackoverflow.com/a/33791170/1366033)
* [VS Code - Mouse Wheel Zoom](https://stackoverflow.com/q/30192884/1366033)

* [How to prevent VScode from closing editor when pressing ctrl+w with no tabs open?](https://superuser.com/q/1432729/180163)

  ```json
  {
    "key": "ctrl+w",
    "command": "-workbench.action.closeWindow",
    "when": "!editorIsOpen && !multipleEditorGroups"
  }
  ```

* How to determine which extension is causing an issue

  As of Nov 2020 release, use [**Extension Bisect**](https://code.visualstudio.com/updates/v1_52#_troubleshooting-extension-bisect)

* [Determine which formatter is being used for VS Code?](https://stackoverflow.com/q/49640469/1366033)

* [How can I customize the tab-to-space formatting?](https://stackoverflow.com/q/29972396/1366033)

  ```json
  "editor.tabSize": 2
  ```


* [How to hide the side bar in Visual Studio Code?](https://stackoverflow.com/q/30878856/1366033)

  Command Pallet > `View: Toggle Activity Bar Visibility`

  ```json
  "workbench.activityBar.visible": false
  ```

* [Select each occurrence of find](https://stackoverflow.com/q/35992145/1366033)

  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> - `editor.action.selectHighlights`
  <kbd>Alt</kbd> + <kbd>Enter ↵</kbd> - `editor.action.selectAllMatches`


  Added via [Add selectAllMatches command in column selection mode. #5715](https://github.com/microsoft/vscode/pull/5715)

* [Outdent by single space instead of 4](https://stackoverflow.com/q/47903209/1366033)

  * <kbd>Shift</kbd> + <kbd>Tab</kbd> - Outdent
  * <kbd>Ctrl</kbd> + <kbd>[</kbd> - Outdent Line

* [Change VSCode Default Language for new files?](https://stackoverflow.com/q/35904221/1366033)

  ```json
  "files.defaultLanguage": "markdown"
  ```

* [How to view an HTML file in the browser with Visual Studio Code](https://stackoverflow.com/a/57740507/1366033)

  Install [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)

* [Multi-line regular expressions in Visual Studio Code](https://stackoverflow.com/q/41150941/1366033)

  > `CR` is not matched with [\s\S]. Add `\r` to the character class

  ```js
  /[\s\S\r]+/
  ```

* [How to change diff color Visual Studio Code](https://stackoverflow.com/q/49036101/1366033)

  ```json
  "workbench.colorCustomizations": {
    "diffEditor.removedTextBackground": "#68190f3a",
    "diffEditor.insertedTextBackground": "#1d9c281a"
  },
  ```

* [Disable auto closing tags in TypeScript](https://stackoverflow.com/q/46463820/1366033)

  ```json
  "typescript.autoClosingTags": false,
  "auto-close-tag.disableOnLanguage": ["typescript"]
  ```

   [TypeScript Generics: Adds closing "Tag" to type specifier](https://github.com/formulahendry/vscode-auto-close-tag/issues/17)


* [Highlight Active Tab](https://stackoverflow.com/q/59121072/1366033)

  ```json
  "workbench.colorCustomizations": {
    "tab.activeBorderTop": "#3e6ef1",
  },
  ```

* Go to Next Problem

  * <kbd>F8</kbd> - Go To Next Problem in Files (`editor.action.marker.nextInFiles`)
  * <kbd>Alt</kbd> + <kbd>F8</kbd> - Go To Next Problem (`editor.action.marker.next`)

* Navigation

  * <kbd>Ctrl</kbd> + <kbd>O</kbd> - Go to Symbols in [File](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_go-to-symbol-in-file)
  * <kbd>Ctrl</kbd> + <kbd>T</kbd> - Go to Symbols in [Workspace](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_go-to-symbol-in-workspace)

* [How do I collapse sections of code in Visual Studio Code for Windows?](https://stackoverflow.com/q/30067767/1366033)

  ```ts
  //#region
  //#endregion
  ```

* [Jump to Closing tag in VS Code?](https://stackoverflow.com/q/42996522/1366033)

  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> - [**Breadcrumb Keyboard Navigation**](https://code.visualstudio.com/docs/editor/editingevolved#_breadcrumb-keyboard-navigation)

* [How to display variable values inline during debugging?](https://stackoverflow.com/q/62337163/1366033)

  ```json
  {
    // Show variable values inline in editor while debugging.
    "debug.inlineValues": true,
  }
  ```

* [How to set working directory for debugging](https://stackoverflow.com/q/38623138/1366033)

  Set `cwd`

  ```json
  "cwd": "${workspaceFolder}/docs",
  ```

* To enable the Visual Studio Code GitHub Support, please set a Personal Access Token

* [Format is not using indent settings](https://stackoverflow.com/q/36251820/1366033)


* [VS Code has a star (★) in the intellisense name](https://stackoverflow.com/q/56618135/1366033)

  * [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)
  * [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)


* [Moving Panel in Visual Studio Code to right side](https://stackoverflow.com/a/53352975/1366033)

  View: Toggle Panel Position

* [Are there bookmarks in Visual Studio Code?](https://stackoverflow.com/q/30179571/1366033)

  [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> - Toggle Bookmark

* [VS code indentation when copying and pasting is messed up](https://stackoverflow.com/q/42747498/1366033)

  ```js
  "editor.formatOnPaste": true
  ```

* [How to change indentation in Visual Studio Code?](https://stackoverflow.com/q/34174207/1366033)

  ```json
  "[typescript]": {
      "editor.tabSize": 2
  }
  ```

* [read clipboard text content](https://stackoverflow.com/q/54632431/1366033)

  * [`env`](https://code.visualstudio.com/api/references/vscode-api#env)
  * [`ClipBoard`](https://code.visualstudio.com/api/references/vscode-api#Clipboard)


* [How to trigger parameter hints in Visual Studio Code?](https://stackoverflow.com/q/53731271/1366033)

  ```json
  "javascript.inlayHints.parameterNames.enabled": "all",
  ```

  * Release Notes
    * [Inlay hints for JavaScript and TypeScript](https://github.com/microsoft/vscode-docs/blob/vnext/release-notes/v1_60.md#inlay-hints-for-javascript-and-typescript)

  * Prior Art
    * [Inlay Hints—JetBrains Rider](https://www.jetbrains.com/help/rider/Inline_Parameter_Name_Hints.html#code-analysis-hints)
    * [Viewing method parameter information—WebStorm](https://www.jetbrains.com/help/webstorm/viewing-method-parameter-information.html)

  * Threads
    * [Parameter Hints shown inline all the time (like IntelliJ) · Issue #16221 · microsoft/vscode](https://github.com/microsoft/vscode/issues/16221)
    * [JS Parameter Annotations](https://marketplace.visualstudio.com/items?itemName=lannonbr.vscode-js-annotations)

* [AutoComplete for CSS](https://stackoverflow.com/q/45865053/1366033)

  * [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
  * [HTML Class Suggestions](https://marketplace.visualstudio.com/items?itemName=AndersEAndersen.html-class-suggestions)
  * [Class autocomplete for HTML](https://marketplace.visualstudio.com/items?itemName=AESSoft.aessoft-class-autocomplete)


* [Cycle through tabs](https://stackoverflow.com/a/38978993/1366033)


* Macro like Keybindings

  * [Macro like keybindings #871](https://github.com/microsoft/vscode/issues/871)
  * [Macro recording - Issue #4490 - microsoft/vscode](https://github.com/Microsoft/vscode/issues/4490)

* [File Nesting](https://github.com/microsoft/vscode/issues/6328)

  ```json
  "explorer.experimental.fileNesting.enabled": true,
  "explorer.experimental.fileNesting.patterns": {
    "*.ts": "$(capture).js, $(capture).d.ts",
    "*.js": "$(capture).js.map, $(capture).min.js, $(capture).d.ts",
    "*.jsx": "$(capture).js",
    "*.tsx": "$(capture).ts",
    "tsconfig.json": "tsconfig.*.json",
    "package.json": "package-lock.json, .npmrc, yarn.lock, .yarnrc",
    "*.cs": "$(capture).*.cs"
  }
  ```

* [VS Code not showing subfolders when there is only one](https://stackoverflow.com/q/59400901/1366033)

  ```json
  "explorer.compactFolders": false,
  ```

* [How to pin tab](https://stackoverflow.com/a/66279790/1366033)


  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> - View: Pin/Unpin Editor

  ```json
  {
      "key": "ctrl+shift+alt+k",
      "command": "workbench.action.pinEditor",
      "when": "!activeEditorIsPinned"
    },
    {
      "key": "ctrl+shift+alt+k",
      "command": "workbench.action.unpinEditor",
      "when": "activeEditorIsPinned"
    }
  }
  ```


* [XML Auto Commenting C# in Visual Studio Code](https://stackoverflow.com/q/34275209/1366033)

  ```cs
  {
      "editor.formatOnType": true,
  }
  ```

* [Visual Studio Code "Open With Code" does not appear after right-clicking a folder](https://stackoverflow.com/q/37306672/1366033)

  Reinstall & checkboxes

* [Running preLaunchTask with watch mode in VS Code](https://stackoverflow.com/q/42672037/1366033)

  ```json
  {
    "isBackground": true
  }
  ```

* [Run / Open VSCode from Mac Terminal](https://stackoverflow.com/q/30065227/1366033)

   Run `Shell Command: Install code in PATH`


* [How to add more indentation in the Visual Studio code explorer file tree structure?](https://stackoverflow.com/q/55310734/1366033)

  ```json
  "workbench.tree.indent": 10
  ```

* [Explorer: allow to expand a sub-tree fully via Alt-click #9456](https://github.com/microsoft/vscode/issues/9456)

  Use <kbd>Alt</kbd> + Click

  [Add "Expand All" Button to Tree](https://github.com/microsoft/vscode/issues/88682)


* [C# "go to definition" (F12) not working](https://stackoverflow.com/q/47995468/1366033)

  Command Palette > OmniSharp: Restart OmniSharp


* [How to avoid multi cursor on wrapped lines in VS Code?](https://stackoverflow.com/a/73311165/1366033)

  PR - [Add info on logical lines by KyleMit](https://github.com/microsoft/vscode-docs/pull/5564)

  ```json
  {
    "key": "shift+alt+down",
    "command": "editor.action.insertCursorBelow",
    "when": "textInputFocus",
    "args": { "logicalLine": true },
  },
  {
    "key": "shift+alt+up",
    "command": "editor.action.insertCursorAbove",
    "when": "textInputFocus",
    "args": { "logicalLine": true },
  },
  ```

* [How do I open all files of a commit](https://stackoverflow.com/q/65284314/1366033)

  1. Right click on the Commit
  2. Open Changes
  3. Open Files

  **See Also**: [Feature Request: View All Changes In PR](https://github.com/microsoft/vscode-pull-request-github/issues/3047)

* [How do I open the same file side by side in a single Visual Studio Code session](https://stackoverflow.com/q/48674275/1366033)

   View: Split Editor - <kbd>Ctrl</kbd> + <kbd>\</kbd>

* [Disable Markdownlint settings for workspace](https://superuser.com/q/1295409/180163)

  ```json
  "markdownlint.config": {
      "default": true,
  }
  ```

* [Increase max search limit](https://stackoverflow.com/q/73402465/1366033)

  ```json
  {
    "search.maxResults": 40000
  }
  ```

* [How to completely uninstall VS Code on Windows?](https://stackoverflow.com/q/47689536/1366033)

  1. Uninstall
  2. Delete:
     * `%UserProfile%/.vscode`
     * `%AppData%/Code`

* [vscode-gitlens - Support ignoring revisions on blame](https://github.com/gitkraken/vscode-gitlens/issues/947)

  Use built in `blame.ignoreRevsFile=.git-blame-ignore-revs`

* [How do I turn on text wrapping by default in VS Code](https://stackoverflow.com/q/38561881/1366033)

  ```json
  "editor.wordWrap": "on",
  ```

* [How to select the whole variable name including $](https://stackoverflow.com/q/68128258/1366033)

  ```json
  "[powershell]" : {
      "editor.wordSeparators": "`~!@#%^&*()=+[{]}\\|;:'\",.<>/?"
  },
  ```

  See Also: [How to select the whole variable name including $ in Visual Studio Code in PHP?](https://stackoverflow.com/q/55931937/1366033)

* [How to syntax-highlight HTML inside JavaScript strings](https://stackoverflow.com/q/49166328/1366033)

  Use [**es6-string-html**](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)

* [XML indentation using plugin for VS code - Wrap Attributes](https://stackoverflow.com/q/69598825/1366033)

  ```json
  {
    "xml.format.splitAttributes": true
  }
  ```

* [How to undo split screen](https://stackoverflow.com/q/56409944/1366033)

  `View: Single Column Editor Layout`

  ```json
  "command aliases": {
    "workbench.action.editorLayoutSingle": "Unsplit All"
  },
  ```

* [VS Code Markdown - is there a clever way to make links intellisense?](https://stackoverflow.com/q/59830081/1366033)

  See [Markdown workspace header link completions](https://github.com/microsoft/vscode-docs/blob/vnext/release-notes/v1_76.md#markdown-workspace-header-link-completions)

  ```json
  "markdown.suggest.paths.includeWorkspaceHeaderCompletions": "onSingleOrDoubleHash",
  ```

* [Compare two files](https://stackoverflow.com/q/30139597/1366033)

  Command Palette > "File: Compare Active File With"


* [How can I attach to a specific process in Visual Studio Code](https://stackoverflow.com/q/60440765/1366033)
  
  ```json
  {
    "request": "attach",
    "processId":"${command:pickProcess}"
  }
  ```
  
  
  ```json
  {
    "request": "attach",
    "processName": "someProcess.exe"
  }
  ```
  
  **See Also**: [Debugging in Visual Studio Code > Launch versus attach configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-versus-attach-configurations)

* [Is it possible to supply process-id with shell command when attaching to process?](https://stackoverflow.com/q/65723608/1366033)


  Use [**Tasks Shell Input**](https://marketplace.visualstudio.com/items?itemName=augustocdias.tasks-shell-input) extension

  ```json
  "launch": {
      "configurations": [
          {
              // ...
              "processId": "${input:FindVivadoPID}",
              // ...
          }
      ],
      "inputs": [
          {
            "id": "FindVivadoPID",
            "type": "command",
            "command": "shellCommand.execute",
            "args": {
              "command": "pgrep 'ecold.*lnx64.g/vivado' -f",
              "description": "Select your Vivado PID",
              "useFirstResult": true,
            }
          }
      ]
  }
  ```


  * **Further Reading**
    * [Debugging](https://code.visualstudio.com/docs/editor/debugging)
    * [Tasks](https://code.visualstudio.com/docs/editor/tasks)
    * [Variables > Input Variables](https://code.visualstudio.com/docs/editor/variables-reference#_input-variables)


* [Can vscode use a profile from `Properties/launchSettings.json`?](https://stackoverflow.com/q/70869011/1366033)

  ```json
  "launchSettingsProfile": "${workspaceFolder}/<Relative-Path-To-Project-Directory>/Properties/launchSettings.json"
  ```



