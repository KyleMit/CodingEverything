let { escapeHtml } = require('markdown-it')().utils;
var hljs = require('highlightjs');
const Window = require('window');
const window = new Window();
global.document = window.document // declare globally (needed in highlightjs)


module.exports = highlight

// customize
hljs.getLanguage('sql').keywords += ' with RAISERROR';

// pin button to side of container
const COPY_BTN = `<button class="btn-icon btn-copy">
                    <span class="btn-text">Copy</span>
                    <img src="/assets/images/icons/fa/copy.svg" alt="copy icon">
                 </button>`


function highlight(str, lang, info) {

    // grab fenced block metadata
    let useRaw = info.includes('raw')
    var params = info.split(" ").map(p => ({ key: p.split("=")[0], val: p.split("=")[1] }))
    var filename = params.find(p => p.key === "file")
    var title = params.find(p => p.key === "title")

    // set default
    let formatted = useRaw ? str : escapeHtml(str)

    // parse language if we got one
    if (lang && hljs.getLanguage(lang)) {
        try {
            if (!useRaw) {
                formatted = hljs.highlight(lang, str, true).value

            } else {

                let pre = document.createElement('pre');
                pre.innerHTML = `<code class="language-${lang}">${str}</code>`
                let codeNode = pre.childNodes[0]

                hljs.highlightBlock(codeNode)

                formatted = codeNode.innerHTML
            }
        } catch (__) {} // if we fail, just use default
    }


    let codeHeader = filename ? `<div class="code-header"><b>file:</b> ${filename.val}</div>` :
        title ? `<div class="code-header">${title.val}</div>` : ""

    // container must start with pre ... if (highlighted.indexOf('<pre') AND is whitespace sensitive
    let output = `<pre class="hljs-container hljs">${codeHeader}${COPY_BTN}<pre class="hljs"><code>${formatted}</code></pre></pre>`;

    return output;
}