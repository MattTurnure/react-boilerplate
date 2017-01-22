var path = require('path');

module.exports = {
    // context is your source directory
    context: path.resolve('src'),

    // entry refers to your main js file
    entry: [
        './index'
    ],

    output: {
        // where the bundle file get sent
        path: path.resolve('dist/'),
        // where you want to reference the path
        publicPath: '/assets/',
        // name of your bundle (bundle.js is convention)
        filename: 'bundle.js'
    },

    // specify the directory that acts as your root
    devServer: {
        contentBase: 'dist'
    },

    // preloaders and loaders
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, { 
            test: /\.jsx?$/, // Match both .js and .jsx files
            exclude: /node_modules/, 
            loader: 'babel', 
            query: {
                presets:['react']
            }
        }]
    },

    // this makes it so you don't have to type '.js' in import statements.
    resolve: {
        extensions: ['', '.js']
    }
};