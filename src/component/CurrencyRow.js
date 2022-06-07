import React from 'react'
import './CurrencyRow.css'

export default function CurrencyRow(props) {
  const {
    currencies,
    currency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div className='form'>
      <input type="number" value={amount} 
        onChange={e => onChangeAmount (e.target.value)} 
      />
      <select value={currency} 
        onChange={e => onChangeCurrency (e.target.value)}>
        {currencies.map(currency => (
          <option key = {currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  )
}