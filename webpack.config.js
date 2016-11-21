var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src") + "/app/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist") + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [{
            test: /\.jsx$|\.js$/,
            loader: ["babel-loader"],
            exclude: /node_modules/,
            query: {
                presets: ["react", "es2015","stage-0"]
            }
        }]
    }
}