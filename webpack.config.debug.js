var path = require('path');

var DIR_IN = path.join(__dirname, 'source');

module.exports = {
    context: DIR_IN,
    entry: {
        './debug/index': './index.js',
        './debug/app/app': './app/app.js'
    },
    output: {
        path: './',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include: DIR_IN }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    target: 'electron'
}
