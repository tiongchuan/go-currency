import React, { useEffect, useState } from 'react';
import './App.css';
import API from './API'
import CurrencyRow from './component/CurrencyRow';

function App() {
  
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState('')
  const [currency1, setCurrency1] = useState('SGD')
  const [currency2, setCurrency2] = useState('USD')
  const [rates, setRates] = useState([])
  // const [swap, setSwap] = useState(false)

  useEffect(() => {
    API.get ('/latest.json?app_id=f6857feb6f6942aca2273fdde14cfae9')
      .then(res => {
        setRates(res.data.rates)
      })
  }, [])

  useEffect(() => {
    if(!!rates) {
      handleAmount1Change(1)
    }
  }, [rates])
  

  function format(number) {
    return number.toFixed(4)
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setAmount1(amount1)
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
    setCurrency1(currency1)
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setAmount2(amount2)
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
    setCurrency2(currency2)
  }

  function getTime() {
    const d = new Date()
    d.getFullYear()
  }
  
  // function handleOnClick () {
  //   setSwap(currency1 (!currency2))
  // }

  return (
    <>
      <div className='background'></div>
      <div className='container'>
        <h1>Go Currency</h1>
        <div className='btn_form'>
        <button>&#8595;&#8593;</button>
        <div>
          <CurrencyRow
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
            onChangeAmount={handleAmount1Change}
            onChangeCurrency={handleCurrency1Change}
          />
          <CurrencyRow
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
            onChangeAmount={handleAmount2Change}
            onChangeCurrency={handleCurrency2Change}
          />
        </div>
        </div>
        <div className='rates'>
          <p>1{currency1} = {rates[currency2]}{currency2}</p>
          <p>7/6/2022</p>
          <p>{getTime}</p>
        </div>
      </div>
    </>
  )
}

export default App;