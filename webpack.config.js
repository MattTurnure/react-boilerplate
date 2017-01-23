var path = require('path');
var webpack = require('webpack');
var copy = require('copy-webpack-plugin');

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
            from: './dev/index.html',
            to: './'
        }]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
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
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        }, {
            test: /\.html$/,
            exclude: /(node_modules)/,
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