# ProseMirror

[ProseMirror](https://prosemirror.net/)
[Github](https://github.com/ProseMirror)



## Examples

[basic example](https://prosemirror.net/examples/basic/)
[Friendly markdown example](https://prosemirror.net/examples/markdown/)

## Repos

* [prosemirror-example-setup](https://github.com/ProseMirror/prosemirror-example-setup) - An example of how to set up a ProseMirror editor


## Documentation

* [Guide](https://prosemirror.net/docs/guide/)
* [Reference manual](https://prosemirror.net/docs/ref/)


## Modules

* Core
  * [**prosemirror-model**](https://prosemirror.net/docs/ref/#model) - defines the editor's document model, the data structure used to describe the content of the editor.

  * [**prosemirror-state**](https://prosemirror.net/docs/ref/#state) -  provides the data structure that describes the editor's whole state, including the selection, and a transaction system for moving from one state to the next.

  * [**prosemirror-view**](https://prosemirror.net/docs/ref/#view) - implements a user interface component that shows a given editor state as an editable element in the browser, and handles user interaction with that element.

  * [**prosemirror-transform**](https://prosemirror.net/docs/ref/#transform) - contains functionality for modifying documents in a way that can be recorded and replayed, which is the basis for the transactions in the state module, and which makes the undo history and collaborative editing possible.

* Additional
  * [**basic editing commands**](https://prosemirror.net/docs/ref/#commands) - encapsulate an editing action
  * [**binding keys**](https://prosemirror.net/docs/ref/#keymap) - a plugin for conveniently defining key bindings
  * [**undo history**](https://prosemirror.net/docs/ref/#history) - an implementation of an undo/redo history for ProseMirror
  * [**input macros**](https://prosemirror.net/docs/ref/#inputrules) - input rules to an editor, which can react to or transform text typed by the user
  * [**collaborative editing**](https://prosemirror.net/docs/ref/#collab) - a communication channel for collaborative editing can be hooked
  * [**simple document schema**](https://prosemirror.net/docs/ref/#schema-basic) - defines a simple schema. You can use it directly, extend it, or just pick out a few node and mark specs to use in a new schema.

## Support

* [ProseMirror Discuss](https://discuss.prosemirror.net/)
* [[prose-mirror] tag](https://stackoverflow.com/questions/tagged/prose-mirror)

