const webpack = require('webpack');
const postcssConfig = require('./postcss.config');

module.exports = {
    entry: './dev/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            },
        ],
    },
    postcss: postcssConfig,
    vue: {
        loaders: {
            js: 'babel',
        },
    },
};
