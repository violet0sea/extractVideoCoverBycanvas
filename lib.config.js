const webpack = require('webpack');
const path = require('path');

const libs = [
    'react',
    'react-dom',
    'react-router'
];

module.exports = {
    output: {
        path: path.resolve(__dirname, 'public/lib'),
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        libs
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}