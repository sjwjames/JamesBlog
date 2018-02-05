const path = require('path');
const root = './';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function () {
    return {
        //context 对entry 和 loader生效
        context:path.resolve(root, 'app'),
        entry: {
            'app': 'index.js',
            'framework': ['data/index.js','services/index.js','components/index.js']
        },
        output: {
            sourceMapFilename: '[name].map',
            publicPath:'/'
        },
        resolve: {
            mainFiles: ['index'],
            alias: {
                Data: 'data/',
                Services: 'services/',
                Components:'components/'
            },
            modules: ['app','node_modules']
        },
        module: {
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    include: /app/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                }, {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['public'],{
                root:root,
                dry:false
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'lib',
                minChunks: function (module) {
                    return module.context && module.context.includes('node_modules');
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunksSortMode: 'dependency',
                template: 'index.tpl.html',
                inject: 'body'
            }),
            new ExtractTextPlugin('styles.css')
        ]
    };
};
 