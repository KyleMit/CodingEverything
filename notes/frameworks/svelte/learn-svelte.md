<!-- markdownlint-disable MD036 -->
# Learn Svelte

<https://learn.svelte.dev/>
<https://github.com/sveltejs/learn.svelte.dev>

## Introduction


### [Html Superset](https://learn.svelte.dev/tutorial/welcome-to-svelte)

```svelte
<h1>Hello world!</h1>
```

### [Interpolation](https://learn.svelte.dev/tutorial/your-first-component)

```html
<h1>Hello {world}</h1>
```

### [Dynamic Attributes](https://learn.svelte.dev/tutorial/dynamic-attributes)

```html
<img {src}>
```

Shorthand attributes

```html
<img src={src}>
```

### [Scoped Styles](https://learn.svelte.dev/tutorial/styling)

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

### [Import and use component](https://learn.svelte.dev/tutorial/nested-components)

```svelte
<script>
  import Nested from './Nested.svelte'
</script>

<Nested/>
```

### [Don't escape html with `@html` tags](https://learn.svelte.dev/tutorial/html-tags)

```svelte
<script>
  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
```

**Warning**: [Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)


### [Instantiate Component](https://svelte.dev/tutorial/making-an-app)

```js
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    answer: 42
  }
});
```

## Reactivity

### [Reactive assignment based on bound DOM events](https://learn.svelte.dev/tutorial/reactive-assignments)

```svelte
<script>
  let count = 0;

  function incrementCount()  { count++ }
</script>

<button on:click={incrementCount}>{count}</button>
```

### [Reactive variable declaration](https://learn.svelte.dev/tutorial/reactive-declarations)

```js
$: doubled = count * 2;
```

> re-run this code whenever any of the referenced values change

**Note**: Uses [`label` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

### [Reactive statements / block](https://learn.svelte.dev/tutorial/reactive-statements)

```js
$: console.log('the count is ' + count);
```

```js
$: {
  console.log('the count is ' + count);
}
```

### [Reactivity when mutating object (not assigning) -> assign anyway](https://learn.svelte.dev/tutorial/updating-arrays-and-objects)

```js
// does not work
numbers.push(numbers.length + 1);
// works
numbers = [...numbers, numbers.length + 1];
```

> The updated variable must directly appear on the left hand side of the assignment.

## Props

### [Declaring Props](https://learn.svelte.dev/tutorial/declaring-props)

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

### [Default Prop Value](https://learn.svelte.dev/tutorial/default-values)

```js
export let answer = 'a mystery';
```

### [Spread Props](https://learn.svelte.dev/tutorial/spread-props)

```diff
- <Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/>
+ <Info {...pkg}/>
```

## Templating Logic

### [If Blocks](https://learn.svelte.dev/tutorial/if-blocks)

```svelte
{#if user.loggedIn}
  <button on:click={toggle}>
    Log out
  </button>
{/if}
```

### [If/Else Blocks](https://learn.svelte.dev/tutorial/else-blocks)

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

### [For Each Loop](https://learn.svelte.dev/tutorial/each-blocks)

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

### [For Each Loop w/ Key](https://learn.svelte.dev/tutorial/keyed-each-blocks)

```svelte
<script>
  let names = [{id: 'A'}, {id: 'B'}, {id: 'C'}];
</script>

{#each names as , i}
  {id}
{/each}
```

### [Await Blocks](https://learn.svelte.dev/tutorial/await-blocks)

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

## Events

### [DOM Events](https://learn.svelte.dev/tutorial/dom-events)

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

### [Inline Event handler](https://learn.svelte.dev/tutorial/inline-handlers)

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

### [Event Modifiers](https://learn.svelte.dev/tutorial/event-modifiers)

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

### [Component Events](https://learn.svelte.dev/tutorial/component-events)

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

### [Event forwarding](https://learn.svelte.dev/tutorial/event-forwarding)


> Unlike DOM events, component events don't bubble

```diff
- <script>
-  import { createEventDispatcher } from 'svelte';
- 
-  const dispatch = createEventDispatcher();
- 
-  function forward(event) {
-   dispatch('message', event.detail);
-  }
- </script>
- 
- <Inner on:message={forward}/>
+ <Inner on:message/>
```

### [DOM Event forwarding](https://learn.svelte.dev/tutorial/dom-event-forwarding)

**Parent**

```svelte
<Child on:click={handleMessage} />
```

**Child**

```svelte
<Grandchild on:click />
```

**Grandchild**

```svelte
<button on:click={sayHello}>
```

## Binding

### [Text Inputs](https://learn.svelte.dev/tutorial/text-inputs)

* Data flow is typically top down
* Component can set attributes on element, but not vice versa
* Bindings allow for two way data exchange
* Prevents attaching `on:input` handler and updating on every change



## Transitions

### [Transition Directive](https://learn.svelte.dev/tutorial/transition)


```svelte
<script>
import { fade } from 'svelte/transition';
</script>

<p transition:fade>
```

### [Transition Parameters](https://learn.svelte.dev/tutorial/adding-parameters-to-transitions)


```svelte
import { fly } from 'svelte/transition';

<p transition:fly={{ y: 200, duration: 2000 }}>
```

### [In and Out Transitions](https://learn.svelte.dev/tutorial/in-and-out)

```svelte
<p in:fly={{ y: 200, duration: 2000 }} out:fade>
```

### [Custom CSS Transition](https://learn.svelte.dev/tutorial/custom-css-transitions)


```js
function fader(node, { delay = 0, duration = 400}) {
  const o = +getComputedStyle(node).opacity;

  return {
    delay,
    duration,
    css: (t) => `opacity: ${t * 0}`
  }
}
```


