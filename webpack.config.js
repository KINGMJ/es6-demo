const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    //入口文件
    entry: {
        demo1: './app/demo1/index.js',
        demo2: './app/demo2/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8083,
    },
    //入口文件输出配置
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
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
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['demo2']
        })
    ]
};
module.exports = config;