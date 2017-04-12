const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('base.js');

module.exports = function(env) {
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
            colors: true,
            historyApiFallback: true,
            inline: true,
            hot: true
        }
    })
};