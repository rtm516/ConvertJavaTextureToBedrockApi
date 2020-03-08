const isDebug = (process.env.NODE_ENV === "development");

module.exports = [
    {
        devtool: false,
        entry: {
            index: "./src/index.js"
        },
        mode: (isDebug ? "development" : "production"),
        output: {
            filename: "[name].js",
            path: __dirname + "/build",
            libraryTarget: "umd"
        },
        target: "node"
    },
    {
        devtool: false,
        entry: {
            index: "./src/index.js"
        },
        mode: (isDebug ? "development" : "production"),
        output: {
            filename: "[name].web.js",
            path: __dirname + "/build",
            libraryTarget: "umd",
            globalObject: "this" // Fix worker
        },
        resolve: {
            alias: {
                fs: __dirname + "/src/fs_browser_null.js",
                "fs-extra": __dirname + "/src/fs_browser_null.js",
                "graceful-fs": __dirname + "/src/fs_browser_null.js",
                path: "path-browserify", // Latest version which supports `path.parse`
                readdirp: __dirname + "/src/fs_browser_null.js"
            }
        },
        target: "web"
    }
];
