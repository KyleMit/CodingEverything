// Create an instance of mark.js and pass an argument containing
// the DOM object of the context (where to search for matches)
var context = document.querySelectorAll("dl");
var markInstance = new Mark(context);
// Cache DOM elements
var keywordInput = document.querySelector("#input-filter");

function performMark() {

  // Read the keyword
  var keyword = keywordInput.value;

  // apply filtering class if we have a search term
  context.forEach(function(el){
    el.classList.toggle('filtering', keyword)
  })

  // Remove previous marked elements and mark
  // the new keyword inside the context
  markInstance.unmark({
  	done: function(){

		if (keyword) {

            markInstance.mark(keyword, {
                done: function() {
                    // reset all marked elements
                    document.querySelectorAll(".marked").forEach(function(el) {
                        el.classList.remove("marked")
                    })

                    // tag all marked element parents
                    document.querySelectorAll("dt mark").forEach(function(el) {
                        el.parentElement.classList.add("marked")
                    })
                    document.querySelectorAll("dd mark").forEach(function(el) {
                        el.parentElement.previousElementSibling.classList.add("marked")
                    })
                }

            });

        }
    }
  });
};

// Listen to input and option changes
keywordInput.addEventListener("input", performMark);

// on mobile, make room for the keyboard
keywordInput.addEventListener('focus', function(e) {
    // 'ontouchstart' in document.documentElement
    if (window.innerWidth < 900) {
        document.getElementById('form-filter').scrollIntoView(true)
    }
});