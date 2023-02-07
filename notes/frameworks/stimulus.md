# Stimulus

> A modest JavaScript framework for the HTML you already have.

[Stimulus](https://stimulus.hotwired.dev/)

## Alternatives

* [Alpine.js](https://alpinejs.dev/)


## VS Code

* [StimulusJS - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=tejanium.stimulusjs)

## Example

```html
<div data-controller="hello">
  <input data-hello-target="name" type="text">

  <button data-action="click->hello#greet">
    Greet
  </button>

  <span data-hello-target="output">
  </span>
</div>
```

```js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
```

