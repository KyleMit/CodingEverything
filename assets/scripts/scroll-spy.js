// add scroll spy
if (document.querySelectorAll('.toc a').length) {
    var spy = new Gumshoe('.toc a');
}

// add smooth scroll to fragment ids
if (document.body.scrollIntoView) {
    document.body.addEventListener('click',function(e) {
        if (e.target.tagName === "A" && e.target.attributes.href.value.slice(0,1)) {
            var id = e.target.attributes.href.value.slice(1)
            var el = document.getElementById(id)
            if (el) {
                e.preventDefault();
                el.scrollIntoView({behavior: "smooth"})
                if (history.pushState) {
                    history.pushState(null, null, '#' + id)
                }
            }
        }
    })
}