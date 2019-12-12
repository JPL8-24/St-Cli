const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: '../dist',
    port: 8040,
    hot: true,
    compress: true
  },
  plugins: [	
		new webpack.HotModuleReplacementPlugin()
	],
}


module.exports = merge(commonConfig,devConfig);