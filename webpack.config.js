const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var openBrowser = require('react-dev-utils/openBrowser');
openBrowser("http://localhost:9000")
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
        proxy: {
          '/pic/upload': {
            target:{
                "host": "staging.admin.xk.miui.com",
                "protocol": 'http:',
                "port": 80
            }, 
            secure: false,
            changeOrigin: true,
          }
        },
        historyApiFallback: true, // 不跳转    
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
    ]
}

