const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function () {
   return {
       entry:{
           'components':'./app/components/index.js',
           'data':'./app/data/index.js',
           'services':'./app/services/index.js',
           'scenes':'./app/scenes/index.js'
       },
       output: {
           path: path.resolve('./','public/'),
           filename: '[name].bundle.js',
           sourceMapFilename: '[name].map'
       },
       resolve:{
           mainFiles:['index'],
           extensions: ['.js','jsx','json','less','css'],
           modules: ['node_modules']
       },
       module: {
           loaders: [
               {
                   test: /\.json$/,
                   loader: "json-loader"
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
                   loader: 'style!css?modules!postcss'
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
               name: ['components', 'data','services'].reverse()
           }),
           new HtmlWebpackPlugin({
               filename: 'index.html',
               chunksSortMode: 'dependency',
               template: './app/index.tpl.html',
               inject: 'body'
           })
       ],
   };
};
 