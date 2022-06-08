import React from 'react';
import ReactDOM from 'react-dom/client';
import CurrencyConverter from './component/CurrencyConverter';
// import GoCurrency from './components/Main';
//import CurrencyData from './components/CurrencyData';
//import CurrencyChart from './components/CurrencyChart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrencyConverter />
    {/* <CurrencyData/> */}
    {/* <GoCurrency/> */}
    {/* <CurrencyChart/> */}
 
  </React.StrictMode>
);