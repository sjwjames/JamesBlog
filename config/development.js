const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('../config/base.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devtool: 'eval-source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './app',
            stats: {colors: true}
        }
    });
};