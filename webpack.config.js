const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  //入口文件
  entry: {
    index: './app/index.js',
    demo1: './app/demo1/index.js',
    demo2: './app/demo2/index.js',
    demo3: './app/demo3/index.js',
    demo4: './app/demo4/index.js',
    demo5: './app/demo5/index.js',
    demo6: './app/demo6/index.js',
    demo7: './app/demo7/index.js',
    demo8: './app/demo8/index.js',
    demo9: './app/demo9/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8083,
  },
  //入口文件输出配置
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
    }),
  ],
}
module.exports = config
