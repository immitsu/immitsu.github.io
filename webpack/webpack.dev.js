const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'web',

  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  devServer: {
    client: {
      overlay: true,
      progress: true
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8081
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [new ReactRefreshPlugin()]
}
