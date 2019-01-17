const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, "web/script"),
        filename: "ui.bundle.js"
    }
};
