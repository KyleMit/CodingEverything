document.body.addEventListener('click', function(e) {
    // check if we clicked on a nav toggle, then do our stuff
    if (e.target.matches(".nav-toggle, .nav-toggle *")) {
        e.preventDefault();
        toggleNav();
        
    } else if (!document.body.classList.contains('nav-closed') &&
               !e.target.matches(".sidenav, .sidenav *")) {
        // if the nav bar is open, and we clicked off it, toggle (close)
        toggleNav();
    }
});

function toggleNav() {
    var isOpen = !document.body.classList.contains('nav-closed')

    // set nav state on body
    document.body.classList.toggle('nav-closed', isOpen);

    // update aria attributes
    document.querySelectorAll(".nav-toggle").forEach(function(el) {
        el.setAttribute('aria-expanded', !isOpen)
    })
}


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchend', handleTouchEnd, false);

// declare variables in parent scope
var xDown = null;                                                        
var yDown = null;  

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
}; 

function handleTouchEnd(evt) {
    // make sure touch start has already fired
    if ( ! xDown || ! yDown ) { return; }

    // if the click came from inside the house (sidenav) don't do anything
    if (evt.target.closest("nav.sidenav")) { return }

    // calculate movements
    var xUp = evt.changedTouches[0].clientX;
    var yUp = evt.changedTouches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    // check if we're open
    var isOpen = !document.body.classList.contains('nav-closed')

    if (!isOpen) {
        // if we're not open, only open if we've moved more x than y
        var movedMostlyHorizontal = Math.abs( xDiff ) > Math.abs( yDiff )
        var movedFarEnough = Math.abs( xDiff ) > 60
        var movedRight = xDiff < 0
        var notScrollable = !IsScrollable(evt.target)

        var shouldOpen = movedMostlyHorizontal && movedFarEnough && movedRight && notScrollable

        if (shouldOpen) { toggleNav() }

    } else {
        // if we're already open, any touch will close
        toggleNav()
    }

    // reset values
    xDown = null;
    yDown = null;                                             
};

function IsScrollable(el) {
	if (el.clientWidth < el.scrollWidth) return true
    if (!el.parentElement) return false
    return IsScrollable(el.parentElement)
}