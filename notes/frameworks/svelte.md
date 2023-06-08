# Svelte

<https://svelte.dev/>

> Cybernetically enhanced web apps

## Links

* [Github](https://github.com/sveltejs/svelte)
* [Examples](https://svelte.dev/examples/hello-world)
* [Svelte Origins: A JavaScript Documentary](https://www.youtube.com/watch?v=kMlkCYL9qo0)

## Typescript

[Svelte <3 TypeScript](https://svelte.dev/blog/svelte-and-typescript)

## Svelte Kit

* [SvelteKit • Web development, streamlined](https://kit.svelte.dev/)

## Examples

### [Saved Examples](https://svelte.dev/apps)

* [Pass Value from Child to Parent](https://svelte.dev/repl/24adfb0a93734265952e2870155aeb49?version=3.43.1)

## Convention

* Capitalize Svelte Component name to differentiate from HTML Tags


## API

* `class SvelteComponent`
  * constructor
  * on
  * set
  * destroy
  * mount
  * bind
  * init
  * claim
  * create

## Syntax / Tutorial

### Introduction



* [Html Superset](https://svelte.dev/tutorial/basics)

  ```svelte
  <h1>Hello world!</h1>
  ```

* [Interpolation](https://svelte.dev/tutorial/adding-data)

  ```html
  <h1>Hello {world}</h1>
  ```

* [Shorthand Attributes](https://svelte.dev/tutorial/dynamic-attributes)

  ```html
  <img {src}>
  <img src={src}>
  ```

* [Scoped Styles](https://svelte.dev/tutorial/styling)

  ```svelte
  <p>This is a paragraph.</p>

  <style>
    p {
      color: purple;
    }
  </style>
  ```

  Output

  ```css
  p.svelte-i8x8i0{color:purple}
  ```

* [Import and use component](https://svelte.dev/tutorial/nested-components)

  ```svelte
  <script>
    import Nested from './Nested.svelte'
  </script>

  <Nested/>
  ```

* [Instantiate Component](https://svelte.dev/tutorial/making-an-app)

  ```js
  import App from './App.svelte';

  const app = new App({
    target: document.body,
    props: {
      answer: 42
    }
  });
  ```

### Reactivity

* [Reactive assignment based on bound DOM events](https://svelte.dev/tutorial/reactive-assignments)

  ```svelte
  <script>
    let count = 0;

    function incrementCount()  { count++ }
  </script>
  
  <button on:click={incrementCount}>{count}</button>
  ```

* [Reactive variable declaration](https://svelte.dev/tutorial/reactive-declarations)

  ```js
  $: doubled = count * 2;
  ```

  > re-run this code whenever any of the referenced values change

  **Note**: Uses [`label` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

* [Reactive statements / block](https://svelte.dev/tutorial/reactive-statements)

  ```js
  $: console.log('the count is ' + count);
  ```

  ```js
  $: {
    console.log('the count is ' + count);
  }
  ```

* [Reactivity when mutating object (not assigning) -> assign anyway](https://svelte.dev/tutorial/updating-arrays-and-objects)

  ```js
  // does not work
  numbers.push(numbers.length + 1);
  // works
  numbers = [...numbers, numbers.length + 1];
  ```

  > The updated variable must directly appear on the left hand side of the assignment.

### Props

* [Declaring Props](https://svelte.dev/tutorial/declaring-props)

  **Parent.Svelte**

  ```svelte
  // pass prop
  <Nested answer={42}/>
  ```

  **Child.Svelte**

  ```svelte
  <script>
    // declare answer as prop
    export let answer;
  </script>
  ```

* [Default Prop Value](https://svelte.dev/tutorial/default-values)

  ```js
  export let answer = 'a mystery';
  ```

* [Spread Props](https://svelte.dev/tutorial/spread-props)

  ```diff
  - <Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/>
  + <Info {...pkg}/>
  ```

### Templating Logic

* [If Blocks](https://svelte.dev/tutorial/if-blocks)

  ```svelte
  {#if user.loggedIn}
    <button on:click={toggle}>
      Log out
    </button>
  {/if}
  ```

* [If/Else Blocks](https://svelte.dev/tutorial/else-blocks)

  ```svelte
  {#if user.loggedIn}
    Log out
  {:else}
    Log in
  {/if}
  ```

  * `#` indicates a block *opening* tag ex. `{#if}`
  * `/` indicates a block *closing* tag ex. `{/if}`
  * `:` indicates a block *continuation* tag ex. `{:else}`

* [For Each Loop](https://svelte.dev/tutorial/each-blocks)

  ```svelte
  <script>
    let names = ['kyle','beth','ryan'];
  </script>

  <ol>
    {#each names as name}
      <li>{name}</li>
    {/each}
  </ol>
  ```

* For Each Loop w/ Index

  ```svelte
  <script>
    let names = ['kyle','beth','ryan'];
  </script>

  {#each names as name, i}
  {i + 1}. {name} <br/>
  {/each}
  ```

* For Each Loop w/ Destructuring

  ```svelte
  <script>
    let entries = [{id: 'A'}, {id: 'B'}, {id: 'C'}];
  </script>

  {#each entries as {id}, i}
    {id}{i < entries.length -1 ? ", ": ""}
  {/each}
  ```

* [For Each Loop w/ Key](https://svelte.dev/tutorial/keyed-each-blocks)

  ```svelte
  <script>
    let names = [{id: 'A'}, {id: 'B'}, {id: 'C'}];
  </script>

  {#each names as , i}
    {id}
  {/each}
  ```

* [Await Blocks](https://svelte.dev/tutorial/await-blocks)

  ```svelte
  {#await promise}
    <p>...waiting</p>
  {:then number}
    <p>The number is {number}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  ```

  Or only include when promise is resolved

  ```svelte
  {#await promise then number}
    <p>the number is {number}</p>
  {/await}
  ```

### Events

* [DOM Events](https://svelte.dev/tutorial/dom-events)

  Listen to any event with `on:` directive


  ```svelte
  <script>
    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
      m.x = event.clientX;
      m.y = event.clientY;
    }
  </script>

  <div on:mousemove={handleMousemove}>
    The mouse position is {m.x} × {m.y}
  </div>
  ```

* [Inline Event handler](https://svelte.dev/tutorial/inline-handlers)

  ```svelte
  <script>
    let count = 0;
  </script>

  <button on:click={e => count++}>
    {count}
  </button>
  ```

  Can also surround with *optional* quotes for syntax highlighting

  ```svelte
  <button on:click="{e => count++}">
  ```

* [Event Modifiers](https://svelte.dev/tutorial/event-modifiers)

  * `preventDefault` — calls `event.preventDefault()` before running the handler
  * `stopPropagation` — calls `event.stopPropagation()`, preventing the event reaching the next element
  * `passive` — improves scrolling performance on touch/wheel events
  * `nonpassive` — explicitly set `passive: false`
  * `capture` — fires the handler during the capture phase instead of the bubbling phase
  * `once` — remove the handler after the first time it runs
  * `self` — only trigger handler if `event.target` is the element itself
  * `trusted` — only trigger handler if `event.isTrusted` is true
    * i.e. if the event is triggered by a user action.

  ```svelte
  <button on:click|once={handleClick}>
    Click me
  </button>
  ```

* [Component Events](https://svelte.dev/tutorial/component-events)

  **Child Component**

  ```svelte
  <script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function sayHello() {
      dispatch('message', {
        text: 'Hello!'
      });
    }
  </script>
  ```

  **Parent Component**

  ```svelte
  <script>
    import Inner from './Inner.svelte';

    function handleMessage(event) {
      alert(event.detail.text);
    }
  </script>

  <Inner on:message={handleMessage}/>
  ```

## Compilation

Svelte Component

```html
<h1>Hello world!</h1>
```

Generates

```js
/* App.svelte generated by Svelte v3.59.1 */
import {
  SvelteComponent,
  detach,
  element,
  init,
  insert,
  noop,
  safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
  let h1;

  return {
    c() {
      h1 = element("h1");
      h1.textContent = "Hello world!";
    },
    m(target, anchor) {
      insert(target, h1, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(h1);
    }
  };
}

class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}

export default App;
```


## Questions

* [Can we write typescript inside a svelte component?](https://stackoverflow.com/q/57034573/1366033)

  Add `lang="ts"` to your `script` block

  ```svelte
  <script lang="ts">
    export const hello: string = 'world';
  </script>
  ```

* [Handle form submit with TypeScript types](https://stackoverflow.com/q/64527549/1366033)

  Demo in [Svelte REPL](https://svelte.dev/repl/8eb540552faa4651a398b182fa5cdd48?version=3.24.1)

  ```svelte
  <script lang="ts">
    function handleSubmit(e: SubmitEvent) {
      const formData = new FormData(e.target as HTMLFormElement)
    }
  </script>

  <form on:submit|preventDefault={handleSubmit}>
  ```

* [Can I keep "unused css selector"?](https://stackoverflow.com/q/68499862/1366033)

  Use `global` style attribute

  ```svelte
  <style global>
    .red {
        color: red;
    }
  </style>
  ```

  Use `:global` selector

  ```css
  :global(.red) {
      color: red;
  }
  ```

  Use `:is` selector

  ```css
  :is(.red) {
      color: red;
  }
  ```

* [How to render html in svelte](https://stackoverflow.com/q/57580013/1366033)

  Use [`{@html ...}` expression](https://svelte.dev/docs#template-syntax-html)

  ```svelte
  {@html post.content}
  ```


  