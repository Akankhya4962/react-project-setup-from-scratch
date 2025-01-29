
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//or
// const App: React.FC = () => <h1>Hello, TypeScript World!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render( <App/> );
