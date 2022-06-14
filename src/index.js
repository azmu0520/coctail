import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductPovider } from './context';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ProductPovider>
          <Root />
        </ProductPovider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
