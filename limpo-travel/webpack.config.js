const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { Template } = require('webpack');

module.exports ={
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        main: path.resolve(__dirname, 'main_index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[main].[contenthash].js', 
        clean: true
    }, 
    plugins: [
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, 'main.html'),
            filename: 'main.html',
            chunks: ['main']
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
            
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(scss|sass)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'], 
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource', 
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/inline', 
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.css'], 
      },
      devServer: {
        static: path.resolve(__dirname, 'dist'), 
        port:2000,
        open: true, 
        hot: true, 
        liveReload:true, 
        client: {
            overlay: false,
        },
    }
    
}