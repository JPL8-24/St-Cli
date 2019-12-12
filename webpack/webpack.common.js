const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader:'css-loader',
          options:{
            minimize: true, 
          }
        }, 'postcss-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader', { loader: 'css-loader', options: { importLoaders: 2, modules: true } }, 'postcss-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 2, modules: true } }, 'postcss-loader', 'sass-loader']
      },
      {
        test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
        use:[
          {
            loader:'url-loader',
            options:{
              outputPath:'images/',
              limit:8192
            }
          }
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].min.[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: 'fonts/',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify:{
        minifyCSS:true,
        minifyJS:true
      }
    }),
    new OptimizeCSSAssetsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
      manifest:require('../dll/mainfest.json')
    }),
    new AddAssetHtmlPlugin({ filepath: './dll/ventor.js' }),
  ],
  optimization:{
    splitChunks:{
      chunks:'all',
    }
  },
  resolve: {
    extensions: [".js",".jsx"],
    alias: {
      "@": path.join(__dirname, "../src"),
    }
  },
};
