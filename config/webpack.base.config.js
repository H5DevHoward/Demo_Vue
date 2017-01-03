const webpack = require('webpack');

module.exports = {
    entry: './dev/index.js',
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
        loaders: [{
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
    vue: {
        loaders: {
            js: 'babel',
        },
    },
};
