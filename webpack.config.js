'use strict';

const path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'src', 'extension.ts'),

  externals: {
    vscode: 'commonjs vscode'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },

  output: {
    filename: 'extension.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      path.resolve('node_modules'),
      path.resolve('src')
    ]
  },

  target: 'node'

};
