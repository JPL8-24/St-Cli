const path = require('path');
const webpack = require('webpack');
const DllPlugin = require('webpack/lib/DllPlugin');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

module.exports = {
  mode:'production',
  name:'ventor',
  entry:{
    ventor:['react','react-dom','react-router']
  },
  output:{
    filename:'ventor.js',
    path:path.join(__dirname,'../dll'),
    library: "vendor_[hash]"
  },
  plugins:[
    new DllPlugin({
        path:path.join(__dirname,'../dll','mainfest.json'),
        name: 'vendor_[hash]'
    }),
    new BundleAnalyzerPlugin({
			analyzerMode: 'static'
		}),
  ]
}