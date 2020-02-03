module.exports = function(eleventyConfig) {

    // static passthroughs - remap to root
    eleventyConfig.addPassthroughCopy({ "assets/images/icons/fav/favicon.ico": "/favicon.ico" });
    eleventyConfig.addPassthroughCopy({ "assets/images/icons/fav/manifest.json": "/manifest.json" });
    eleventyConfig.addPassthroughCopy({ "assets/scripts/service-worker.js": "/service-worker.js" });

    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("assets/scripts");
    eleventyConfig.addPassthroughCopy("assets/styles");
    eleventyConfig.addPassthroughCopy("admin");

    // grab 3rd party dependencies
    eleventyConfig.addPassthroughCopy({ "node_modules/mark.js/dist/mark.min.js": "/vendor/scripts/mark.js" });
    eleventyConfig.addPassthroughCopy({ "node_modules/gumshoejs/dist/gumshoe.polyfills.min.js": "/vendor/scripts/gumshoe.js" });
    eleventyConfig.addPassthroughCopy({ "node_modules/highlightjs/styles": "/vendor/styles/hljs" });
    eleventyConfig.addPassthroughCopy({ "node_modules/firacode/distr/woff": "/assets/fonts/" });
    eleventyConfig.addPassthroughCopy({ "node_modules/firacode/distr/woff2/": "/assets/fonts/" });
    eleventyConfig.addPassthroughCopy({ "node_modules/typeface-noto-serif/files": "/assets/fonts/" });
    eleventyConfig.addPassthroughCopy({ "node_modules/typeface-roboto/files": "/assets/fonts/" });

    // add filters
    eleventyConfig.addFilter("cssmin", require("./utilities/clean-css.js"));
    eleventyConfig.addFilter("jsmin", require("./utilities/clean-js.js"));
    eleventyConfig.addFilter("dateDisplay", require("./utilities/dates.js"));
    eleventyConfig.addFilter("removeHash", html => html.replace(/ #/g, ""));
    eleventyConfig.addFilter("removeParen", html => html.replace(/\(.*?\)/g, ""));
    eleventyConfig.addFilter("lastDir", str => str.split("/").pop());
    eleventyConfig.addFilter("contentTags", tags => tags.filter(t => !["post", "draft"].includes(t)));
    eleventyConfig.addFilter("findByName", (arr, findValue) => arr.find(a => a.name === findValue));
    eleventyConfig.addFilter("isPostType", tags => tags && tags.some(t => ["post", "draft"].includes(t)));
    eleventyConfig.addFilter("isDraft", tags => tags && tags.some(t => t === 'draft'));
    eleventyConfig.addFilter("take", (array, n) => array.slice(0, n));
    eleventyConfig.addFilter("sortByPostCount", arr => arr.sort((a, b) => (a.posts.length < b.posts.length ? 1 : -1)));


    // custom collections
    eleventyConfig.addCollection("drafts", col => col.getFilteredByTag("post").filter(item => item.data.draft));
    eleventyConfig.addCollection("published", col => {
        let posts = col.getFilteredByTag("post").filter(item => !item.data.draft)

        // add previous and next
        for (let i = 0; i < posts.length; i++) {
            const prevPost = posts[i - 1];
            const nextPost = posts[i + 1];

            posts[i].data.prevPost = prevPost;
            posts[i].data.nextPost = nextPost;
        }

        return posts;
    });

    // bundle collection
    eleventyConfig.addCollection("bundles", col => {
        let script = col.getFilteredByGlob("**/meta/bundle-scripts.js.njk")[0]
        let style = col.getFilteredByGlob("**/meta/bundle-styles.css.njk")[0]
        return { script, style }
    });

    // configure syntax highlighting
    let md = require("./utilities/customize-markdown.js")()
    eleventyConfig.setLibrary("md", md);

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
        return inline ?
            md.renderInline(content) :
            md.render(content);
    });

    // add plugins
    let pluginTOC = require('eleventy-plugin-nesting-toc');
    eleventyConfig.addPlugin(pluginTOC, { tags: ['h2, h3'] });

    /* embed tweet plugin setup */
    let pluginEmbedTweet = require("eleventy-plugin-embed-tweet")
    let tweetEmbedOptions = {
        cacheDirectory: 'tweets',
        useInlineStyles: false
    }
    eleventyConfig.addPlugin(pluginEmbedTweet, tweetEmbedOptions);

    return {
        dir: {
            "data": "data",
            "includes": "assets",
            "layouts": "layouts"
        },

        // By default markdown files are pre-processing with liquid template engine
        // https://www.11ty.io/docs/config/#default-template-engine-for-markdown-files
        markdownTemplateEngine: "njk",
    };
};