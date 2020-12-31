# Monaco

> A browser based code editor


[microsoft/monaco-editor](https://github.com/microsoft/monaco-editor)

## Links

* [Monaco Editor Playground](https://microsoft.github.io/monaco-editor/playground.html#creating-the-editor-hello-world)
* [lukejacksonn/**monacode**](https://github.com/lukejacksonn/monacode) - An es-module wrapper around the monaco editor and prettier
* [microsoft/**monaco-editor-samples**](https://github.com/Microsoft/monaco-editor-samples/) - Samples for using the Monaco Editor
* [Monaco Editor API Docs](https://microsoft.github.io/monaco-editor/api/index.html)

## Add Command

```js
var jsCode = `function SayHello(name) {
 console.log(name)
}
`

var editor = monaco.editor.create(document.getElementById("container"), {
 value: jsCode,
 language: "javascript"
});

editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, myAction)

function myAction() {
    alert('my command is executing!');
}
```

## Add Action

```js
var jsCode = `function SayHello(name) {
 console.log(name)
}
`

var editor = monaco.editor.create(document.getElementById("container"), {
 value: jsCode,
 language: "javascript"
});

editor.addAction({
 id: 'my-unique-id',
 label: 'My Label!!!',
 keybindings: [
  monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
 ],
 run: myAction
});


function myAction(ed) {
    alert('my command is executing!');
}
```

## Require

  ```js
  import * as monaco from 'monaco-editor';
  ```

  ```json
  "module": "./esm/vs/editor/editor.main.js",
  ```

  ```js
  import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js'; // all
  import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';  // core
  ```


## Questions

* [Manually execute action](https://github.com/microsoft/monaco-editor/issues/32)

    ```js
    editor.getAction('editor.action.format').run()
    ```

* [Binding multiple keycode command](https://github.com/microsoft/monaco-editor/issues/42)

    ```js
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {/* ... */})
    ```

* [Server Side Rendering (Prerender of Monaco Editor)](https://github.com/microsoft/monaco-editor/issues/420)

* [Monaco Editor - Difference between `Action` and `Command`?](https://stackoverflow.com/q/65399399/1366033)


* [Monaco Editor different themes on multiple editors on the same page?](https://stackoverflow.com/q/51172393/1366033)

  Not Possible per [Changing theme in one editor should change all editors #338](https://github.com/Microsoft/monaco-editor/issues/338)


* [Custom background color in Monaco editor?](https://stackoverflow.com/questions/44766624/custom-background-color-in-monaco-editor)


  ```js
  monaco.editor.defineTheme("vs-darker", {
    base: "vs-dark",
    inherit: true,
    colors: {
      "editor.background": "black",
    },
    rules: [],
  });

  monaco.editor.create(editor, {
      ...options,
      theme: "vs-darker",
      value: text,
    });
  ```


* Get Number of Lines

  [`Editor.getModel`](https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#getmodel)
  [`ITextModel.getLineCount`](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.itextmodel.html#getlinecount)


* Get Line Height

  [`monaco.editor.EditorOption.lineHeight`](https://microsoft.github.io/monaco-editor/api/enums/monaco.editor.editoroption.html#lineheight)

* Get Content Height

  ```js
  let lineCount = editor.getModel().getLineCount();
  let lineHeight = editor.getOption(monaco.editor.EditorOptions.lineHeight.id)
  let contentHeight = lineCount * lineHeight;
  ```

  or

  ```js
  let contentHeight = editor.getContentHeight();
  ```

* [Can editor stretch to fit its content? · Issue #794](https://github.com/microsoft/monaco-editor/issues/794#issuecomment-688959283)

* [How to find current editor theme?](https://github.com/microsoft/monaco-editor/issues/1624)

  ```js
  editor._themeService.getTheme()
  ```

* [Monaco Editor 'onChange' event?](https://stackoverflow.com/q/48828538/1366033)

  ```js
  window.editor.model.onDidChangeContent((event) => {
    render();
  });
  ```

* [Monaco captures page scroll](https://github.com/microsoft/monaco-editor/issues/1853)

  ```js
  editor.scrollbar.alwaysConsumeMouseWheel: false
  ```

