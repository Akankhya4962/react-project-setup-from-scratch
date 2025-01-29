const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Entry point for your app
  output: {
    filename: 'bundle.js', // The bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/, // Process .tsx and .ts files
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader to handle TypeScript files
      },
      {
        test: /\.(js|jsx)$/, // Process JavaScript/JSX files (optional, in case you want to mix JS and TS)
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel for JSX syntax
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use this HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Use the `static` option to serve the `dist` folder
    },
    port: 3000, // Development server runs on localhost:3000
    open: true, // Automatically open the browser when the server starts
  },
  mode: 'development', // Set the mode to development
};
