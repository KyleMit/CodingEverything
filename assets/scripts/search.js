;(function (window, document, undefined) {

	'use strict';

	//
	// Variables
	//
	var form = document.querySelector('#form-search');
	var input = document.querySelector('#input-search');
	var resultList = document.querySelector('#search-results');
    var searchIndex

    /**
    * Create the markup when no results are found
    * @return {String} The markup
    */
    var createNoResultsHTML = function () {
        return "<button id='close-search' aria-label='Close'>×</button>" + 
               "<p>Sorry, no matches were found.</p>";
    };

    /**
    * Create the markup when no results are found
    * @return {String} The markup
    */
    var createNoInputHTML = function () {
        return "<button id='close-search' aria-label='Close'>×</button>" + 
               "<p>Start typing to search</p>";
    };

    var highlightSnippet = function (text, query, summary) {
        var ellipsis = "<span class='text-muted'>...</span>"
        
        // find starting word
        var wordStartIndexes = query.split(" ").map(function(word) {
            return text.indexOf(word) // -1 or real value
        }).filter(function(pos) {
            return pos >= 0;
        })
    
        
        // return summary if we didn't get a match
        if (wordStartIndexes.length === 0) {
            return summary.length > 150 ? summary.slice(0, 150) + ellipsis : summary
        }

        // get earliest match in article
        var startPos = Math.min.apply(this, wordStartIndexes)

        // get starting point
        var prev_counter = 0
        var prev_words = 2
        var prev_index = startPos
        for (var i = startPos - 1; i > 0; i--) {
            if (text[i] === " ") { //word
                // increment prev_counter
                prev_counter++
                prev_index = i
                if (prev_counter > prev_words) {break;}
            }
        }

        // get ending point
        var next_counter = 0
        var next_words = 8
        var next_index = startPos
        for (var i = startPos - 1; i < text.length - 1; i++) {
            if (text[i] === " ") { //word
                // increment prev_counter
                next_counter++
                next_index = i
                if (next_counter > next_words) {break;}
            }
        }

        var snippet = text.slice(prev_index, next_index)

        var result = highlightText(snippet, query)
        

        result = "<span class='match'>" + (prev_index > 0 ? ellipsis + ' ' : "") + result + (next_index < text.length ? " " + ellipsis : "") + "</span>"

        return result;
    }

    var highlightText = function(text, match) {
        var reg = new RegExp(match.replace(/ /g, "|"), 'gi')
        var result = text.replace(reg, "<mark>$&</mark>")
        return result;
    }

    /**
    * Create the HTML for each result
    * @param  {Object} article The article
    * @param  {Number} id      The result index
    * @return {String}         The markup
    */
    var createResultHTML = function (article, id, query) {
        var matchInTitle = testWordMatch(query, article.title)
        var html =
            '<li class="search-result">' +
                '<a href="' + article.url + '">' +
                    '<h2>' + highlightText(article.title, query) + '</h2>' +
                    (matchInTitle ? "" : highlightSnippet(article.content, query, article.summary)) +
                '</a>' +
            '</li>';
        return html;
    };

    /**
    * Create the markup for results
    * @param  {Array} results The results to display
    * @return {String}        The results HTML
    */
    var createResultsHTML = function (results, query) {
        var html = "<button id='close-search' aria-label='Close'>×</button>"
        
        html += '<p>Found ' + results.length + ' matching article' + (results.length === 1 ? '' : 's') + '</p>';

        // limit rending results to first 20
        results = results.slice(0, 20);

        html += '<ul class="search-results-list">';
        html += results.map(function (article, index) {
            return createResultHTML(article, index, query);
        }).join('') + "<ul>";
        return html;
    };

    /**
    * Search for matches
    * @param  {String} query The term to search for
    */
    var search = function (query) {
        // all lower case, please
        query = query.toLowerCase().trim();

        // we we got an empty query string, return
        if (!query) {
            resultList.innerHTML = createNoInputHTML();
            document.body.classList.add('searching');
            return;
        }

        var priority1 = [];
        var priority2 = [];
        var priority3 = [];
        var priority4 = [];

        // Search the content
        searchIndex.forEach(function (article) {
            if (testExactMatch(query, article.title)) return priority1.push(article);
            if (testExactMatch(query, article.content)) priority2.push(article);
            if (testWordMatch(query, article.title)) return priority3.push(article);
            if (testWordMatch(query, article.content)) priority4.push(article);
        });
        // todo - more algorithms to prioritize - # of matches

        // Combine the results into a single array
        var results = [].concat(priority1, priority2, priority3, priority4);

        var unique = function(arr) {
            return arr.sort().filter(function(item, pos, ary) {
                return !pos || item != ary[pos - 1];
            })
        }
        // deduplicate - https://stackoverflow.com/a/9229821/1366033
        results = unique(results)

        // Display the results
        resultList.innerHTML = results.length < 1 
            ? createNoResultsHTML()
            : createResultsHTML(results, query);

        // set search mode
        document.body.classList.add('searching');
    };

    var testExactMatch = function (query, text) {
        // build regex
        var reg = new RegExp(query, 'gi');

        return reg.test(text)
    }

    
    var testWordMatch = function (query, text) {
        // empty spaces become bool alternators
        query = query.replace(/ /g,"|");
        
        // Variables
        var reg = new RegExp(query, 'gi');

        return reg.test(text)
    }

    /**
    * Handle submit events
    */
    var submitHandler = function (event) {
        event.preventDefault();
        search(input.value);
    };

    var inputChangeHandler = function (event) {
        search(input.value);
    };



    var getData = function(){
        fetch('/search.json') // todo ie11
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                searchIndex = json
                // if we got data, attach event handler

                // Create a submit handler
                form.addEventListener('submit', submitHandler, false);
                input.addEventListener('keyup', inputChangeHandler, false);
                input.addEventListener('input', inputChangeHandler, false);

                // if someone put text there already, fire change on focus
                input.addEventListener('focus', function(e) {
                    if (input.value) {inputChangeHandler(e)}
                }, false);

                // listen for close clicks
                document.addEventListener('click', function(e) {
                    if (e.target.id === "close-search") {
                        document.getElementById('search-results').innerHTML = "";
                        document.getElementById('input-search').value = "";
                        document.body.classList.remove('searching');
                    }
                })

                // on mobile, make room for the keyboard
                input.addEventListener('focus', function(e) {
                    // 'ontouchstart' in document.documentElement
                    if (window.innerWidth < 900) {
                        form.scrollIntoView(true)
                    }
                });
                
            });
    };


	// Make sure required content exists
	if (!form || !input || !resultList) return;

    getData()

})(window, document);