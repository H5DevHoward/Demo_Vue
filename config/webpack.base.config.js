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
            'vue$': 'vue/dist/vue.js',
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
                options: {
                    postcss: postcssConfig.plugins,
                },
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css?sourceMap!postcss!sass',
            },
        ],
    },
    postcss: postcssConfig,
    vue: {
        loaders: {
            js: 'babel',
            scss: 'style!css!postcss!sass',
        },
        postcss: postcssConfig.plugins,
    },
};
