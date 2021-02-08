# Open Web Components

[Open Web Components](https://open-wc.org/)

> Open Web Components provides guides, tools and libraries for developing web components


## Docs

* [Documentation: Open Web Components](https://open-wc.org/docs/)
* [Testing Package: Open Web Components](https://open-wc.org/docs/testing/testing-package/)

## Links

* [Testing Workflow for Web Components - DEV Community 👩‍💻👨‍💻](https://dev.to/open-wc/testing-workflow-for-web-components-g73)


## Getting Started

* [Generator](https://open-wc.org/docs/development/generator/)
* [open-wc/create](https://github.com/open-wc/create) - Repository for `npm init @open-wc`

```bash
npm init @open-wc
```

* **Linting** - This generator adds a complete linting setup with *ESLint*, *Prettier*, *Husky* and *commitlint*.
* **Testing** - This generator adds a complete testing setup with *Karma*.
* **Demoing** - This generator adds a complete demoing setup with *Storybook*.
* **Building** - This generator adds a complete building setup with *rollup*.



## Example


```html
<!-- demo/index.html -->
<div id="demo"></div>

<script type="module">
  import { html, render } from 'lit-html';
  import '../dist/kyle-mit.js';

  const title = 'Hello owc World!';
  render(
    html`
      <kyle-mit .title=${title}>
        some more light-dom
      </kyle-mit>
    `,
    document.querySelector('#demo')
  );
</script>
```

```js
// dist/kyle-mit.js
import { KyleMit } from './src/KyleMit.js';
window.customElements.define('kyle-mit', KyleMit);
```

```js
// scr/KyleMit.ts
import { html, css, LitElement, property } from 'lit-element';

export class KyleMit extends LitElement {
  static styles = css`
    :host {
      color: var(--kyle-mit-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
```

```ts
// src/KyleMit.ts
import { html, css, LitElement } from 'lit-element';

export class KyleMit extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--kyle-mit-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
```


## Testing

[Testing: Testing Package: Open Web Components](https://open-wc.org/docs/testing/testing-package/)

```js
import { fixture, html } from '@open-wc/testing';

describe('my-test', () => {
  it('works', async () => {
    const el = await fixture(html` <my-element></my-element> `);
  });
});
```


Pulls in methods from testing-helpers

```js
// import from general testing library
import { fixture } from '@open-wc/testing';

// import from testing-helpers directly
import { fixture } from '@open-wc/testing-helpers';
```

### Templates

#### Test a custom element

```js
import { fixture } from '@open-wc/testing';

it('can instantiate an element', async () => {
  const el = await fixture('<my-el foo="bar"></my-el>');
  expect(el.getAttribute('foo')).to.equal('bar');
}
```

#### Test a custom element with properties

```js
import { html, fixture } from '@open-wc/testing';

it('can instantiate an element with properties', async () => {
  const el = await fixture(html` <my-el .foo=${'bar'}></my-el> `);
  expect(el.foo).to.equal('bar');
});
```

### Testing Helpers

[Testing: Helpers: Open Web Components](https://open-wc.org/docs/testing/helpers/)


## Storybook

[Demoing: Storybook: Open Web Components](https://open-wc.org/docs/demoing/storybook/)

## Building

[Building: Overview: Open Web Components](https://open-wc.org/docs/building/overview/)


## Linting

[EsLint Plugin Lit A11y: Overview: Open Web Components](https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/overview/)


## Experimental: Markdown JavaScript

[Experimental: Markdown JavaScript](https://open-wc.org/docs/experimental/mdjs/)

### preview-story

~~~md
```html preview-story
<demo-wc-card>HTML Story</demo-wc-card>
```
~~~


### script

~~~md
```js story
export const JsStory = () => html` <demo-wc-card>JS Story</demo-wc-card> `;
```
~~~

