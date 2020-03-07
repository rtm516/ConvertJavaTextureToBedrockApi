const isDebug = (process.env.NODE_ENV === "development");

module.exports = {
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
};
