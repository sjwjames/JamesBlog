const path = require('path');
const root = './';
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('../config/base.js');

module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        output:{
            filename: '[name].[chunkhash].js',
            path: path.resolve(root, 'public')
        },
        devtool: 'source-map',
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            //设置当前NODE环境插件
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            //该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。缓存不经常修改的模块
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                sourceMap: true,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    })
}