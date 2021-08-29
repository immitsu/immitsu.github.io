const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',

  output: {
    filename: 'js/[name].[contenthash:4].js',
    path: path.resolve('dist'),
    assetModuleFilename: 'assets/[contenthash:4][ext]',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name].[contenthash:4][ext]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:4].css'
    })
  ],

  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
