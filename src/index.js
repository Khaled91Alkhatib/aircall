import ReactDOM from 'react-dom/client';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import './css/body.css';
import './css/app.css';
import './css/header.css';

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);