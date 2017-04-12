const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
    return {
        entry: {
            'components': './app/components/index.js',
            'data': './app/data/index.js',
            'services': './app/services/index.js',
            'scenes': './app/scenes/index.js'
        },
        output: {
            path: path.resolve('./', 'public/'),
            filename: '[name].[hash].js',
            sourceMapFilename: '[name].map'
        },
        resolve: {
            mainFiles: ['index'],
            alias: {
                Data: './app/data/',
                Services: './app/services/',
                Components:'./app/components/'
            },
            extensions: ['.js', 'jsx', 'json', 'less', 'css'],
            modules: ['./app','node_modules']
        },
        module: {
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
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
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunksSortMode: 'dependency',
                template: './app/index.tpl.html',
                inject: 'body'
            }),
            new ExtractTextPlugin('styles.css')
        ]
    };
};
 