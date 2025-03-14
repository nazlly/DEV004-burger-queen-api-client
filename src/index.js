import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {OrdersProvider} from './context/orders/OrdersContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrdersProvider>
      <App />
    </OrdersProvider>
  </React.StrictMode>
);

reportWebVitals();