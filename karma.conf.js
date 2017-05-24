var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [ 'test.webpack.js'],
        plugins: ['karma-chrome-launcher', 'karma-chai', 'karma-mocha', 'karma-sourcemap-loader',
        'karma-webpack', 'karma-coverage', 'karma-mocha-reporter'],
        preprocessors: {
            'test.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha', 'coverage'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
                    {
                        test: /\.js$/,
                        exclude: /(test.*|node_modules)/,
                        loader: 'istanbul-instrumenter-loader',
                        enforce: 'post'
                    },
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
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};