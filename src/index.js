import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GoCurrency from './components/Main';
import CurrencyConverter from './components/CurrencyConverter';
import CurrencyData from './components/CurrencyData';
import CurrencyChart from './components/CurrencyChart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrencyConverter />
    {/* <CurrencyData/> */}
    {/* <GoCurrency/> */}
    {/* <CurrencyChart/> */}
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
