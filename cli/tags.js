var { promises: fs } = require('fs');
var yamlFront = require('yaml-front-matter');


main()

async function main() {

    // [Using filesystem in node.js with async/await](https://stackoverflow.com/a/58332163/1366033)
    // [Using async/await with a forEach loop](https://stackoverflow.com/a/37576787/1366033)
    // [Merge/flatten an array of arrays](https://stackoverflow.com/a/18307218/1366033)
    // [Counting the occurrences / frequency of array elements](https://stackoverflow.com/a/39841401/1366033)
    // [Convert object to an array of objects?](https://stackoverflow.com/a/49345363/1366033)
    // [Sort array of objects by string property value](https://stackoverflow.com/a/35092754/1366033)

    // get all paths
    let posts = await fs.readdir("./posts")
    let drafts = await fs.readdir("./drafts")
    let notes = await fs.readdir("./notes")

    // include folder in paths
    posts = posts.map(p => `./posts/${p}`)
    drafts = drafts.map(p => `./drafts/${p}`)
    notes = notes.map(p => `./notes/${p}`)

    // merge paths into single array
    let content = [].concat(posts).concat(drafts).concat(notes)

    // return all frontmatter
    let metadata = await Promise.all(content.map(async(path) => {
        let file = await fs.readFile(path, "utf8")
        let data = yamlFront.loadFront(file)
        return data
    }))

    // get all tag data from frontmatter
    let tags = metadata.filter(d => d.tags).map(d => d.tags)

    // flatten array of arrays
    let flatTags = tags.reduce((a, b) => a.concat(b), []);

    // remove 'post' tags
    let metaTags = flatTags.filter(t => t.toLowerCase() !== "post")

    // group by and count
    let groupedTags = metaTags.reduce((grp, tag) => (grp[tag] = ++grp[tag] || 1, grp), {});

    // map to objects
    let objectTags = Object.keys(groupedTags).map(tag => ({ tag, count: groupedTags[tag] }))

    // sort alphabetically
    let alphaTags = objectTags.sort((a, b) => a.tag.localeCompare(b.tag));

    // sort by count
    let countTags = objectTags.sort((a, b) => b.count - a.count);

    console.table(alphaTags)
    console.table(countTags)

}