const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function createConfig(config) {
  return merge(
    {
      entry: './src',
      target: 'web',
      resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '@icons': path.resolve(__dirname, '/assets/icons')
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          favicon: 'public/favicon.ico'
        })
      ]
    },
    config
  )
}

module.exports = ({ env }) => {
  const config = require(`./webpack.${env}.js`)
  return createConfig(config)
}
