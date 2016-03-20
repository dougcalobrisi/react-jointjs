/**
 * Created by leojin on 3/20/16.
 */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: "eval-cheap-module-source-map",
    context: __dirname + "/app",
    entry: "./main.js",
    output: {
        filename: "main.js",
        path: __dirname + "/dist",
        publicPath: "/"
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: [/node_modules/], loaders: ['react-hot', 'babel?cacheDirectory']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: '../index.example.html',
            filename: "index.html"
        })
    ],
    devServer: {
        port: 9090,
        contentBase: './dev',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};