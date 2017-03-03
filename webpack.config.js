const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }

        ]
    },
    devServer: {
        port: 9000,
        historyApiFallback: true, // 不跳转    
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
    ]
}