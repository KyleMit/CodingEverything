var settings = Object.entries(localStorage)
    .filter(arr => arr[0].startsWith("settings-"))
    .map(arr => arr[0].replace("settings-","") + '-' + arr[1])

// apply local settings right away
document.body.classList.add(...settings)  // todo ie11

// if we're executing this, we have js
document.body.classList.remove("no-js")
