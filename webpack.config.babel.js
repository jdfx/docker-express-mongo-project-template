const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    target: "node",
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder from bundle (as this is a server side app only)..
    mode: "production",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    stats: {
        colors: true
    },
    optimization: {
        minimize: false
    }
}