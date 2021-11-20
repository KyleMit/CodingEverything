# State Machines


[@keyframers 1.0.0 | Flipping Fluent](https://youtu.be/-zLiw1GeEGo?t=2659)


```html
<div id="app" data-state="loading">
    <div.ui-loading>UI Loading</div>
    <div.ui-screen-half>UI Screen Half</div>
    <div.ui-screen-full>UI Screen Full</div>
<div>
```

```css
[data-state] .ui-loading,
[data-state] .ui-screen-half,
[data-state] .ui-screen-full  {
   display: none;
}

[data-state='loading'] .ui-loading {
    display: grid
}
[data-state='half'] .ui-screen-half {
    display: grid
}
[data-state='full'] .ui-loading {
    display: grid
}
```

```js
let app = document.querySelector("#app")

let machine = {
    initial: 'loading',
    states: {
        loading: {
            on: { CLICK: 'half'}
        },
        half: {
            on: { CLICK: 'full' }
        }
        full: {
            on: { CLICK: 'loading' }
        }
    }
};

let currentState = machine.initial

let transition = (state, event) => {
    return machine.states[state].on[event] ||
}

let send = (event) => {
    currentState = transition(currentState, event)
    app.setAttribute('data-state', currentState)
}

document.body.addEventListener('click', () => {
    send('CLICK')
})
```


