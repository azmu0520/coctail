import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductPovider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ProductPovider>
        <Root />
      </ProductPovider>
    </Router>
  </React.StrictMode>
);
