const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./webpack.base.config');

const htmlFiles = glob.sync('./dev/*.html');
const htmlPlugins = htmlFiles.map((file, i) =>
    new HtmlWebpackPlugin({
        filename: path.basename(file),
        template: file,
        inject: false,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
        },
    })
);

config.plugins = (config.plugins || []).concat([
    ...htmlPlugins,
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"',
        },
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
        },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CopyWebpackPlugin([
        {
            from: './dev',
        },
    ], {
        ignore: [
            '*.html',
            'router.js',
            'style/**/*',
            'script/**/*',
            'store/**/*',
            'vendor/**/*',
            'component/**/*',
            'data/**/*',
            'font/**/*',
        ],
    }),
]);

module.exports = config;
