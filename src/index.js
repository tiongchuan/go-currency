import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import CurrencyConverter from './components/CurrencyConverter';
import CurrencyData from './components/CurrencyData';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CurrencyConverter />
    {/* <CurrencyData/> */}
    {/* <GoCurrency/> */}
    {/* <CurrencyChart/> */}
 

  </React.StrictMode>
);


