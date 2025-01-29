A React application built from scratch using TypeScript, Webpack, and Babel.

created this react app by the help of a medium article and chatgpt

Step 1: Set Up the Project Folder
Create a new folder for your project:
Command line Text
mkdir my-react-ts-app
cd my-react-ts-app

Initialize a new Node.js project:
Command line Text
npm init -y

This creates a package.json file that keeps track of project dependencies, scripts, and metadata like name and version.
Step 2: Install Required Dependencies
You need to install React, ReactDOM, and various development tools like Webpack, Babel, and TypeScript.
Install React and ReactDOM:
Command line Text
npm install react react-dom

React: The core library for building UI components.
ReactDOM: The library that integrates React with the browser DOM.

Install Development Dependencies:
Install Webpack, Babel, TypeScript, and all the necessary loaders and plugins:

Command line Text
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin typescript ts-loader @types/react @types/react-dom


webpack: Bundles JavaScript, TypeScript, and other assets into a single file for the browser.
webpack-cli: Command-line interface for Webpack.
webpack-dev-server: Development server for live reloading.
babel-loader: Transpiles JSX and modern JavaScript code using Babel.
@babel/core: The core of Babel that does the actual code transformation.
@babel/preset-env: Transpiles modern JavaScript (ES6 and beyond) to backward-compatible JavaScript.
@babel/preset-react: Transpiles JSX syntax into JavaScript.
html-webpack-plugin: Injects bundled JavaScript into an HTML template.
typescript: TypeScript compiler.
ts-loader: Loader to integrate TypeScript with Webpack.
@types/react and @types/react-dom: TypeScript type definitions for React and ReactDOM.

Step 3: Project Structure
Create the following folder structure for your project:
my-react-ts-app/
  ├── public/
  │    └── index.html		# The HTML entry point for the app
  ├── src/
  │    └── index.tsx		# Main TypeScript entry file
  ├── tsconfig.json	            # TypeScript configuration
  ├── .babelrc			# Babel configuration
  ├── webpack.config.js	# Webpack configuration
  └── package.json		# Project metadata and dependencies

Step 4: Set Up Webpack Configuration
Create a webpack.config.js file in the root of the project to define how Webpack should process your files.

js
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

Create a webpack.config.js file in the project root.
Webpack configuration defines how to process files and generate the output.

Key Configuration Details:
Entry Point: The main file (src/index.tsx) where Webpack starts bundling.
Output: The generated bundle is saved to dist/bundle.js.
Loaders:
ts-loader: Processes .ts and .tsx files for TypeScript.
babel-loader: Transpiles modern JavaScript and JSX.
Resolve: Recognizes .tsx, .ts, and .js extensions automatically.
HTML Webpack Plugin: Uses public/index.html as the base HTML file.
Dev Server: Serves files from the dist folder, with hot reloading on localhost:3000.

Step 5: Set Up TypeScript Configuration
Create a tsconfig.json file for TypeScript configuration:

json
{
  "compilerOptions": {
    "target": "es5", // Compile TypeScript to ES5 for better browser compatibility
    "lib": ["dom", "es2015"], // Use the DOM and ES2015 libraries
    "allowJs": true, // Allow JavaScript files to be imported (optional)
    "jsx": "react", // Enable JSX support for React
    "moduleResolution": "node", // Use Node.js style module resolution
    "esModuleInterop": true, // Allow default imports for modules
    "strict": true, // Enable strict type-checking options
    "skipLibCheck": true, // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true // Ensure consistent casing in file names
  },
  "include": [
    "src/**/*.tsx", // Include all TypeScript and TSX files in the src directory
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules" // Exclude the node_modules folder
  ]
}

Create a tsconfig.json file.
This file tells TypeScript how to compile the project.

Key Configuration Details:
"jsx": "react": Enables JSX syntax for React.
"esModuleInterop": true: Allows compatibility with ES modules.
"strict": true: Ensures strict type-checking.
"include": Specifies the TypeScript files to compile.
"exclude": Skips the node_modules folder during compilation.

Step 6: Set Up Babel Configuration
Create a .babelrc file to configure Babel with the presets for React and modern JavaScript.

json
{
  "presets": [
    "@babel/preset-env", // Transpile modern JavaScript (ES6+)
    "@babel/preset-react" // Transpile JSX to JavaScript
  ]
}

Key Presets:
@babel/preset-env: Transforms modern JavaScript syntax.
@babel/preset-react: Transforms JSX syntax into JavaScript.
Babel will work in conjunction with Webpack to process your React components.

Step 7: Set Up HTML File
Create an HTML file at public/index.html where Webpack will inject the React app's bundled JavaScript:

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React TypeScript App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

This div with the id="root" is where React will mount your app.

Create public/index.html.
This is the HTML template that Webpack uses to inject the bundled JavaScript.
Key Points:
<div id="root"></div> is the placeholder where React mounts your app.
Webpack injects the bundle.js file automatically.

Step 8: Create the React App
Now, create a simple React component in src/index.tsx and render it using ReactDOM.

tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18

const App: React.FC = () => <h1>Hello, TypeScript World!</h1>;

// Create a root for React 18's new root API
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//ReactDOM.createRoot() initializes the React tree.

// Render the app
root.render(<App />);

Here, we declare App as a functional component with TypeScript (React.FC is the type for function components).

Step 9: Update package.json Scripts
Add scripts to package.json to start the development server and build the app for production.

json
{
  "name": "my-react-ts-app",
  "version": "1.0.0",
  "scripts": {
    "start": "webpack-dev-server --mode development", // Start the dev server
    "build": "webpack --mode production" // Build the app for production
  },
  "devDependencies": {
    "babel-loader": "^8.0.0",
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0",
    "webpack-dev-server": "^4.0.0",
    "typescript": "^4.0.0",
    "ts-loader": "^9.0.0",
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "@babel/preset-react": "^7.0.0",
    "html-webpack-plugin": "^5.0.0"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0"
  }
}

Step 10: Run the Development Server
Now, run the development server with:
Command line Text
npm start

Your app should now be running at http://localhost:3000, and you should see "Hello, TypeScript World!" displayed on the page.
