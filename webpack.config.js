const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: [
    './src/index.js',
    './src/scss/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 80000
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.png'
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  config.devServer = {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 9000
  }

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

if (process.env.NODE_ENV === 'production') {
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader

  config.plugins.push(
    new MiniCssExtractPlugin()
  )
}

module.exports = config


