var path = require('path');
var webpack = require('webpack');
var copy = require('copy-webpack-plugin');

// optimize
var extractplugin = require('extract-text-webpack-plugin');
var extractstyle = new extractplugin('assets/[name].css');
var WebpackStrip = require('strip-loader');

module.exports = {
    // context is your source directory
    context: path.resolve(__dirname, 'src'),

    // entry refers to your main js file
    entry: [
        './index'
    ],

    output: {
        // where the bundle file get sent
        path: path.resolve('dist/'),
        // where you want to reference the path
        publicPath: '/',
        // name of your bundle (bundle.js is convention)
        filename: 'bundle.js'
    },

    plugins: [
        new copy([{
            from: './index.html',
            to: './'
        }]),

        // create css file
        extractstyle,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],

    // specify the directory that acts as your root
    devServer: {
        contentBase: './dist',
        inline: true,
        historyApiFallback: true,
        port: 4444
    },

    // preloaders and loaders
    module: {
        loaders: [{ 
            test: /\.jsx?$/, // Match both .js and .jsx files
            exclude: /node_modules/, 
            loader: 'babel', 
            query: {
                presets:['react']
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: extractstyle.extract([
                'css',
                'autoprefixer',
                'sass'
            ])
        }, {
            test: /\.html$/,
            exclude: /(node_modules)/,
            loader: 'raw-loader'
        }, {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=10'
        }, {
            test: [/\.js$/, /\.es6$/],
            exclude: /node_modules/,
            loader: WebpackStrip.loader('console.*')
        }]
    },

    // this makes it so you don't have to type '.js' in import statements.
    resolve: {
        extensions: ['', '.js']
    }
};