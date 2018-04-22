const path = require('path');
const root = './';
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('../config/base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        entry: {
            'patch': 'react-hot-loader/patch',
            'client': 'webpack-dev-server/client?http://localhost:9090',
            'devOnly': 'webpack/hot/only-dev-server'
        },
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(root, 'dev')
        },
        devtool: 'eval-source-map',
        plugins: [
            new CleanWebpackPlugin(['dev/*.js'], {
                root: root,
                dry: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './app',
            stats: { colors: true },
            hot: true,
            proxy: {
                '/api/*': {
                    target: 'http://localhost:3030',
                    changeOrigin: true,
                    secure: false
                }
            },
            port: 9090
        }
    });
};