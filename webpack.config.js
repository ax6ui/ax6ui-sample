const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const entry = {
    index: './src/index.js'
};

let plugins = [];

for (let k in entry) {
    let obj = {
        inject: false,
        chunks: [k],
        title: "AX6UI SAMPLE",
        filename: k + '.html',
        template: './src/sample.ejs'
    };

    plugins.push(new HtmlWebpackPlugin(obj));
}


// module.exports
module.exports = {
    entry: entry,
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4000
    },
    devtool: 'inline-source-map',
    node: {
        fs: 'empty',
        child_process: 'empty'
    },
    module: {
        rules:[
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};