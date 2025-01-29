# REACT APPLICATION BUILT FROM SCRATCH USING TYPESCRIPT, WEBPACK, AND BABEL.

A brief description of what this project does and who it's for.

## Installation

Instructions on how to install and set up the project.

```bash
# Clone the repository
git clone https://github.com/Akankhya4962/react-project-setup-from-scratch.git

# Navigate to the project directory
cd react-project-setup-from-scratch

# Install dependencies
npm install
```

## Steps to react a react project from scratch

### Step 1: Set Up the Project Folder

```bash
#Create a new folder for your project:
mkdir my-react-ts-app
cd my-react-ts-app
```

```bash
#Initialize a new Node.js project:
npm init -y
```

This creates a package.json file that keeps track of project dependencies, scripts, and metadata like name and version.

### Step 2: Install Required Dependencies

You need to install React, ReactDOM, and various development tools like Webpack, Babel, and TypeScript. React: The core library for building UI components. ReactDOM: The library that integrates React with the browser DOM. 
```bash
#Install React and ReactDOM:
npm install react react-dom
```

```bash
#Install Development Dependencies: Install Webpack, Babel, TypeScript, and all the necessary loaders and plugins:
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin typescript ts-loader @types/react @types/react-dom
```

- webpack: Bundles JavaScript, TypeScript, and other assets into a single file for the browser. 
- webpack-cli: Command-line interface for Webpack. 
- webpack-dev-server: Development server for live reloading. 
- babel-loader: Transpiles JSX and modern JavaScript code using Babel. 
- @babel/core: The core of Babel that does the actual code transformation. 
- @babel/preset-env: Transpiles modern JavaScript (ES6 and beyond) to backward-compatible JavaScript. 
- @babel/preset-react: Transpiles JSX syntax into JavaScript. 
- html-webpack-plugin: Injects bundled JavaScript into an HTML template. 
- typescript: TypeScript compiler. ts-loader: Loader to integrate TypeScript with Webpack. 
- @types/react and @types/react-dom: TypeScript type definitions for React and ReactDOM.

### Step 3: Project Structure Create the following folder structure for your project: 

```bash
my-react-ts-app/ 
├── public/ 
│ └── index.html # The HTML entry point for the app 
├── src/ 
│ └── index.tsx # Main TypeScript entry file 
├── tsconfig.json # TypeScript configuration 
├── .babelrc # Babel configuration 
├── webpack.config.js # Webpack configuration 
└── package.json # Project metadata and dependencies
```
### Step 4: Set Up Webpack Configuration 

Create a webpack.config.js file in the root of the project to define how Webpack should process your files.
*Copy the webpack.config.js file from the project folder*

**Key Configuration Details:** 
- Entry Point: The main file (src/index.tsx) where Webpack starts bundling. 
- Output: The generated bundle is saved to dist/bundle.js. 
- Loaders: ts-loader: Processes .ts and .tsx files for TypeScript. 
- babel-loader: Transpiles modern JavaScript and JSX. 
- Resolve: Recognizes .tsx, .ts, and .js extensions automatically. 
- HTML Webpack Plugin: Uses public/index.html as the base HTML file. 
- Dev Server: Serves files from the dist folder, with hot reloading on localhost:3000.

### Step 5: Set Up TypeScript Configuration 

Create a tsconfig.json file for TypeScript configuration: *Copy the tsconfig.js file from the project folder*

**Key Configuration Details:**
- "jsx": "react": Enables JSX syntax for React. 
- "esModuleInterop": true: Allows compatibility with ES modules. 
- "strict": true: Ensures strict type-checking. 
- "include": Specifies the TypeScript files to compile. 
- "exclude": Skips the node_modules folder during compilation.

### Step 6: Set Up Babel Configuration 

Create a .babelrc file to configure Babel with the presets for React and modern JavaScript.: *Copy the .babelrc file from the project folder*

**Key Presets:** 
- @babel/preset-env: Transforms modern JavaScript syntax. 
- @babel/preset-react: Transforms JSX syntax into JavaScript. 
Babel will work in conjunction with Webpack to process your React components.

### Step 7: Set Up HTML File 

Create an HTML file at public/index.html where Webpack will inject the React app's bundled JavaScript
*Copy the index.html file from the project folder*

**Key Points:**
- `<div id="root"></div>`is the placeholder where React mounts your app. 
- Webpack injects the bundle.js file automatically.

### Step 8: Create the React App 

Now, create a simple React component in src/index.tsx and render it using ReactDOM.
*Copy the App.tsx file from the project folder*

Here, we declare App as a functional component with TypeScript (React.FC is the type for function components).

### Step 9: Update package.json Scripts 

Add scripts to package.json to start the development server and build the app for production.

### Step 10: Run the Development Server 

Now, run the development server with: 
```bash
npm start
```
Your app should now be running at http://localhost:3000, and you should see "Hello, TypeScript World!" displayed on the page.
