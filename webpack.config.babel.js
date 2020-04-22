const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');

module.exports = [{
    // CLIENT
    entry: path.join(__dirname, 'src/client/index.ts'),
    //devtool: 'inline-source-map',
    target: "web",
    mode: "production",
    externals:[nodeExternals()], // dont package external modules into bundle, this is server side..
    output: {
        path: path.join(__dirname, 'dist/client'),
        filename: 'client.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    stats: {
        colors: true
    },
    optimization: {
        minimize: true
    }
},
{
    // SERVER
    entry: path.join(__dirname, 'src/server/index.ts'),
    //devtool: 'inline-source-map',
    target: "node",
    mode: "production",
    externals:[nodeExternals()], // dont package external modules into bundle, this is server side..
    output: {
        path: path.join(__dirname, 'dist/server'),
        filename: 'server.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              }]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    stats: {
        colors: true
    },
    optimization: {
        minimize: true
    }
}]