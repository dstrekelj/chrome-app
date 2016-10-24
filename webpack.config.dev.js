var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var DIR_IN = path.join(__dirname, 'source');

module.exports = {
    context: DIR_IN,
    entry: {
        'index': './index.js',
        'app/app': './app/app.js'
    },
    output: {
        path: './dev',
        filename: '[name].js',
        publicPath: './'
    },
    module: {
        preLoaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: DIR_IN
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ],
                include: DIR_IN
            },
            {
                test: /\.(jpg|jpeg|png|bmp)$/,
                loader: 'file',
                include: DIR_IN
            },
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: [ 'app/app' ],
            filename: './index.html',
            template: path.join(DIR_IN, 'index.html')
        })
    ],
    target: 'electron',
    deevtool: '#inline-source-map'
}
