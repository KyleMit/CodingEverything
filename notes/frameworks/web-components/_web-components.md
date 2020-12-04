# Web Components

> Web Components is a suite of different technologies allowing you to create reusable custom elements


## Links

[Web Components | MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Concepts

* **Custom Elements** - A set of JavaScript APIs that allow you to define custom elements and their behaviour
* **Shadow DOM** - A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element
* **HTML Templates** - The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page


## Creating a web component

1. Create a JS [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
2. Register your new custom element using [`CustomElementRegistry.define()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
3. (Optional) Attach shadow DOM to custom element using [`Element.attachShadow()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)
4. (Optional) Define HTML Template using [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) and [`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
5. Use your custom element wherever you like on your page, just like you would any regular HTML element.


## Tutorials

* [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
* [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)


## Custom Elements

* [Require a dash](https://html.spec.whatwg.org/#valid-custom-element-name) to be used in name `kebab-case`

