# Create React/Webpack boilerplate

## Install dependencies

1. `mkdir react-boilerplate && cd react-boilerplate`
2. `npm init -y`
3. `npm install --save react react-dom`
4. `npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-polyfill webpack webpack-dev-server`

## Configure package.json

We need a command to start our dev server.

In the `package.json` file, add `start": "webpack-dev-server -d —inline"` to the `scripts` property. This will allow you to `npm run start` to start the web browser and watch your changes.

## Configure ES

In order for babel to do its thing, we need a `.babelrc` file.

1. Create a file called `.babelrc` in the root directory.

2. Paste in this code:

   ```json
   {
       "presets": ["es2015"]
   }
   ```

3. Save it.

## Configure Webpack

Create a `webpack.config.js` file.

1. Create a file called `webpack.config.js` in the root directory.

