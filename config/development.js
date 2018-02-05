const path = require('path');
const root = './';
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('../config/base.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        entry:{
            'patch':'react-hot-loader/patch'
        },
        output:{
            filename: '[name].[hash].js',
            path: path.resolve(root, 'dev')
        },
        devtool: 'eval-source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './app',
            stats: {colors: true},
            publicPath:'./dev'
        }
    });
};