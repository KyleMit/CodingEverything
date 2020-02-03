// on form load, set radio and body (immediately after body opening tag)
function setDisplayDensity(val) {
    var displayCard = val === "card"
    document.body.classList.toggle("display-density-card", displayCard)
    document.body.classList.toggle("display-density-list", !displayCard)
}

// get stored value or default
var displayDensitySetting = localStorage.getItem('settings-display-density') || "card"

// immediately set style to prevent FOUC
setDisplayDensity(displayDensitySetting)


// wait for the dom load to parse remaining elements
document.addEventListener("DOMContentLoaded", function(){

    // set appropriate state on checkboxes once they've loaded
    var displayEl = document.querySelector("input[type='radio'][name='display-toggle'][value='" + displayDensitySetting + "']")
    if (displayEl) { displayEl.checked = true}


    // on change, set body class and local storage (after dom loaded)
	document.querySelectorAll("input[type='radio'][name='display-toggle']").forEach(function(el) {
        el.addEventListener("change",function(e) {
            var curDisplayVal = e.target.value
            setDisplayDensity(curDisplayVal)
            localStorage.setItem('settings-display-density', curDisplayVal)
        });
    });
});
