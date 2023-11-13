import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import App from './App';

import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);
