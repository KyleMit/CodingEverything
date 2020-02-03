let { unescapeAll, escapeHtml } = require('markdown-it')().utils;

module.exports = function CustomizeMD() {
    var highlight = require('./customize-highlight.js');

    // set markdown defaults (inline so we can extend)
    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true,
        highlight: highlight
    };

    // add markdown anchor options
    let markdownItAnchor = require("markdown-it-anchor");
    let opts = {
        permalink: true,
        slugify: function(s) {
            // remove paren text & strip special chars
            let newStr = s.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z ]/gi, "").trim();
            // take first 6 words and separate with "-"
            newStr = newStr.split(/\s+/).slice(0, 6).join("-");
            return newStr;
        },
        permalinkClass: "direct-link",
        permalinkSymbol: "#",
        level: [1, 2, 3, 4]
    };

    // add file extension
    let markdownItFile = require("./markdown-it-file");
    let markdownItDefList = require("markdown-it-deflist")
    let markdownItMark = require("markdown-it-mark")
    let markdownItIns = require("markdown-it-ins")
    let markdownItSpoiler = require("markdown-it-spoiler")
    let markdownItCheckbox = require("markdown-it-checkbox")

    let md = markdownIt(options)
        .use(markdownItAnchor, opts)
        .use(markdownItFile)
        .use(markdownItDefList)
        .use(markdownItMark)
        .use(markdownItIns)
        .use(markdownItSpoiler)
        .use(markdownItCheckbox, {
            divWrap: true,
            divClass: 'checkbox',
        });

    // customize renderer function
    md.renderer.rules.fence = fence

    // when rendering table, wrap in div container
    md.renderer.rules.table_open = function(tokens, idx, options, env, self) {
        return `<div class='table-wrapper'>` + self.renderToken(tokens, idx, options);
    };
    md.renderer.rules.table_close = function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options) + `</div>`
    };


    // Remember old renderer, if overridden, or proxy to default renderer
    let defaultAnchorRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
        // If you are sure other plugins can't add `target` - drop check below
        let token = tokens[idx]
        var tarIndex = token.attrIndex('target');

        let setAttribute = function(token, attrName, attrValue, append) {
            var index = token.attrIndex(attrName);

            if (index < 0) {
                // add new attribute
                token.attrPush([attrName, attrValue]);
            } else {
                // update value of existing attr
                token.attrs[index][1] = (append ? token.attrs[index][1] : "") + attrValue;
            }
        }

        let config = require("../data/config")
        let externalRegex = new RegExp(`^https?:\/\/(?!${config.PROD_DOMAIN})`)
        let isExternal = externalRegex.test(token.attrGet('href'))

        if (isExternal) {
            setAttribute(token, "target", "_blank")
            setAttribute(token, "rel", "noopener")
            setAttribute(token, "class", " external-link", true)
        }

        // pass token to default renderer.
        return defaultAnchorRender(tokens, idx, options, env, self);
    };


    return md
}


/** Should align with markdown-it > renderer.js > default_rules.fence (except for NOTE below)
 *  https://github.com/markdown-it/markdown-it/blob/10.0.0/lib/renderer.js#L39-L86
 */
function fence(tokens, idx, options, env, slf) {
    var token = tokens[idx],
        info = token.info ? unescapeAll(token.info).trim() : '',
        langName = '',
        highlighted, i, tmpAttrs, tmpToken;

    if (info) {
        langName = info.split(/\s+/g)[0];
    }

    if (options.highlight) {
        // NOTE - this is the only line that's any different from by passing info to highlight
        highlighted = options.highlight(token.content, langName, info) || escapeHtml(token.content);
    } else {
        highlighted = escapeHtml(token.content);
    }

    if (highlighted.indexOf('<pre') === 0) {
        return highlighted + '\n';
    }

    // If language exists, inject class gently, without modifying original token.
    // May be, one day we will add .clone() for token and simplify this part, but
    // now we prefer to keep things local.
    if (info) {
        i = token.attrIndex('class');
        tmpAttrs = token.attrs ? token.attrs.slice() : [];

        if (i < 0) {
            tmpAttrs.push(['class', options.langPrefix + langName]);
        } else {
            tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
        }

        // Fake token just to render attributes
        tmpToken = {
            attrs: tmpAttrs
        };

        return '<pre><code' + slf.renderAttrs(tmpToken) + '>' +
            highlighted +
            '</code></pre>\n';
    }


    return '<pre><code' + slf.renderAttrs(token) + '>' +
        highlighted +
        '</code></pre>\n';
};