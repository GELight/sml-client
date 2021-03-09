const path = require("path");
const config = require("./package.json");

const RELEASES_PATH = path.resolve(__dirname, "releases");
const RELEASE_NAME = config.name.replace("@gelight/", "");
const LIBRARY_NAME = RELEASE_NAME.split("-")[0].toUpperCase();

module.exports = {
    mode: "production",
    entry: "./dist/index.js",
    output: {
        filename: `${RELEASE_NAME}-${config.version}.min.js`,
        path: RELEASES_PATH,
        libraryTarget: "var",
        library: LIBRARY_NAME,
    },
    resolve: {
        fallback: {
            fs: false,
        },
    },
};
