const { readdir, stat, mkdir } = require("fs").promises
const { join } = require("path")
const zipFolder = require('zip-a-folder');

const inputDir = 'code-samples'
const outputDir = '_site'

main()

async function main() {
    try {
        // get all top level folders
        let dirs = await getDirs(inputDir)

        // make sure output directory exists
        await mkdir(`${outputDir}/${inputDir}`, { recursive: true })

        // zip each folder
        dirs.forEach(async(dir) => {
            let input = `${inputDir}/${dir}`
            let output = `${outputDir}/${inputDir}/${dir}.zip`
            await zipFolder.zip(input, output);
            console.log(`Writing ${output}`)
        })

    } catch (error) {
        console.warn(error)
    }

}

async function getDirs(path) {
    let dirs = []
    for (const file of await readdir(path)) {
        if ((await stat(join(path, file))).isDirectory()) {
            dirs = [...dirs, file]
        }
    }
    return dirs
}