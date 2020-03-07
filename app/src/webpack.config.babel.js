import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

export default {
    entry: path.join(__dirname, 'src/index.js'),
    target: "node",
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder from bundle (as this is a server side app only)..
    mode: "production",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'damen.js'
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
    plugins: [
        new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
    ],
    stats: {
        colors: true
    },
    optimization: {
        minimize: false
    }
};