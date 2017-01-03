const config = require('./webpack.base.config');

config.devtool = 'eval-source-map';

config.devServer = {
    contentBase: './dev',
    historyApiFallback: true,
};

module.exports = config;
