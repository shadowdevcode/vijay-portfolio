/**
 * index.tsx — React DOM Entry Point
 * ===================================
 * Mounts the <App /> component into the #root element defined
 * in index.html. Wrapped in React.StrictMode for development
 * warnings.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);