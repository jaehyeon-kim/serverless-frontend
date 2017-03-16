var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist"); // where to transfiled copy
var SRC_DIR = path.resolve(__dirname, "src"); // where source is

var config = {
    entry: SRC_DIR + "/app/index.js", // root file to start application
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;