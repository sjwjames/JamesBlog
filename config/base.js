const path = require('path');
const root = './';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css');
const extractLESS = new ExtractTextPlugin('lessStyle.css');
module.exports = function () {
    return {
        //context 对entry 和 loader生效
        context: path.resolve(root, 'app'),
        entry: {
            'app': 'index.jsx'
        },
        output: {
            sourceMapFilename: '[name].map',
            publicPath: '/'
        },
        resolve: {
            alias: {
                Components: path.resolve(root, 'app/components/'),
                Containers: path.resolve(root, 'app/containers/'),
                Skeleton: path.resolve(root, 'app/skeleton/')
            },
            extensions: ['.js', '.jsx'],
            modules: [path.resolve(root, 'app'), path.resolve(root, 'node_modules')],
        },
        module: {
            rules: [
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['env', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    use: extractCSS.extract({
                        use: [ 'css-loader']
                    })
                },
                {
                    test: /\.less$/,
                    use: extractLESS.extract({
                        use: ['css-loader','less-loader',]
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
            extractCSS,
            extractLESS
        ]
    };
};
