// local storage:
// {'settings-color-scheme': "light|dark|system"}
// {'settings-color-theme': "light|dark"}

// body class (class must be applied immediately on load)
// .color-theme-dark | .color-theme-light



// get stored value or default
var siteSchemeVal = localStorage.getItem('settings-color-scheme') || "system"
var siteThemeVal = localStorage.getItem('settings-color-theme') || "light"

// immediately set style to prevent FOUC
setColorScheme(siteSchemeVal)


// wait for the dom load to parse remaining elements
document.addEventListener("DOMContentLoaded", function(){

    // set appropriate state on checkboxes once they've loaded
    var displayEl = document.querySelector("input[type='radio'][name='site-theme'][value='" + siteSchemeVal + "']")
    if (displayEl) { displayEl.checked = true}


    // on change, set body class and local storage (after dom loaded)
	document.querySelectorAll("input[type='radio'][name='site-theme']").forEach(function(el) {
        el.addEventListener("change",function(e) {
            var curSiteTheme = e.target.value
            localStorage.setItem('settings-color-scheme', curSiteTheme)
            setColorScheme(curSiteTheme)
        });
    });
});

// on form load, set radio and body (immediately after body opening tag)
function setColorScheme(val) {
    localStorage.setItem('settings-color-theme', val)

    document.body.classList.toggle("color-theme-dark", val === "dark")
    document.body.classList.toggle("color-theme-light", val === "light")

    if (val === "system") {
        var colorSchemeLight = window.matchMedia('(prefers-color-scheme: light)')
        var colorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)')
        var sysThemeCurrent = colorSchemeLight.matches ? "light" : "dark"

        setColorScheme(sysThemeCurrent)

        // add listener to catch changes
        colorSchemeLight.addListener(function() {
            var sysThemeCurrent = colorSchemeLight.matches ? "light" : "dark"
            setColorScheme(sysThemeCurrent)
        })
    }
}

