var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = config;