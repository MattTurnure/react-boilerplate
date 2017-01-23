var path = require('path');
var copy = require('copy-webpack-plugin');

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

    plugins: [
        new copy([{
            from: './index.html',
            to: './'
        }])
    ],

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
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        }, {
            test: /\.html$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'raw-loader'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=10'
        }]
    },

    // this makes it so you don't have to type '.js' in import statements.
    resolve: {
        extensions: ['', '.js']
    }
};