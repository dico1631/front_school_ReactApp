import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

main();
