# VS Code Extension

## Docs

* [vsce - npm](https://www.npmjs.com/package/vsce)
* [microsoft/vscode-vsce: VS Code Extension Manager](https://github.com/microsoft/vscode-vsce)
* [Releases · microsoft/vscode-vsce](https://github.com/microsoft/vscode-vsce/releases)

## Links

* [Sample code illustrating the VS Code extension API.](https://github.com/Microsoft/vscode-extension-samples)
* [Bundling extensions with webpack - Update](https://code.visualstudio.com/updates/v1_32#_bundling-extensions-with-webpack)
* [Bundling Extensions with webpack - Article](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)
* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Getting Started

[Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)

```bash
npm install -g yo generator-code
```

Then Run

```bash
yo code
```

## Testing Extensions

* [Testing Extensions](https://code.visualstudio.com/api/working-with-extensions/testing-extension)

## Publishing

* [Bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
  * [vsce](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#vsce)
* [Extensions Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)


### Marketplace

[Visual Studio Marketplace](https://marketplace.visualstudio.com/publishers/KyleMit)

### Bundling

* [Bundling Extensions](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)


### VSCE

```bash
npm install -g vsce
```

```bash
vsce login
vsce package
vsce publish
```

### Changelog

[Keep a Changelog](http://keepachangelog.com/)

## Contributes

### `Package.json`

```json
"activationEvents": [
    "onCommand:vs-utils.helloWorld"
],
"contributes": {
    "commands": [{
        "command": "vs-utils.refreshCspell",
        "title": "Utils: Refresh Spell Checker"
    }]
},
```

### `extension.ts`

```js
let disposable = vscode.commands.registerCommand('vs-utils.refreshCspell', function() {
    // The code you place here will be executed every time your command is executed
    // https://github.com/streetsidesoftware/vscode-spell-checker/blob/v1.9.0/packages/client/package.json#L92
    vscode.commands.executeCommand("cSpell.disableForGlobal")
    vscode.commands.executeCommand("cSpell.enableForGlobal")
        // Display a message box to the user
    vscode.window.showInformationMessage('CSpell Refreshed');
});
```


### Continuous Integration

[GitHub Actions](https://code.visualstudio.com/api/working-with-extensions/continuous-integration#github-actions)
[gabrielbb/xvfb-action](https://github.com/marketplace/actions/gabrielbb-xvfb-action)


## Publish Extension

* [Get a Personal Access Token (PAT)](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

  * Set Organization to All accessible organizations
  * Set Scopes to Custom defined and choose the Marketplace > Manage scope

    ```bash
    vsce login <publisher name>
    vsce publish
    ```

## Further Resources

* You can see our full API when you open the file `node_modules/@types/vscode/index.d.ts`.
* Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
* [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VSCode extension marketplace.
* Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).

## Activation Events

[Activation Events](https://code.visualstudio.com/api/references/activation-events)

* `*`
* `onLanguage`
* `onCommand`
* `onDebug`
* `workspaceContains`
* `onFileSystem`
* `onView`
* `onUri`
* `onWebviewPanel`
* `onCustomEditor`
* `onStartupFinished`

## Commands

### Enablement

[Command Enablement](https://code.visualstudio.com/api/extension-guides/command#enablement-of-commands)
[When Clause Contexts](https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts)


## Questions

* Where to set global storage for applications?

  [`globalStorageUri: Uri`](https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.globalStorageUri)


* [@types/vscode ^x.xx greater than engines.vscode ^x.xx](https://stackoverflow.com/q/70137470/1366033)

    ```json
    {
        "engines": {
            "vscode": "^1.62.0"
        }
    }
    ```

