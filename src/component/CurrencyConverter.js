import React, { useEffect, useState } from "react";
import CurrencyData from "./CurrencyData";
import API from "../API";
import './CurrencyConverter.css'
import sgd from './img/sgd.jpg'

const CurrencyConverter = () => {

  const [changeFrom, setChangeFrom] = useState('SGD');
  const [changeTo, setChangeTo] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [currencyData, setCurrencyData] = useState([])
  const [amountConverted, setAmountConverted] = useState('');
  const [latestRate, setLatestRate] = useState('');

  // Get today's date
  let date = new Date()
  let showDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  
  // Set amount 
  const handleAmount = (e) => {
      setAmount(e.target.value)
  }

  // Set change from 
  const handleChangeFrom = (e) => {
      setChangeFrom(e.target.value)
  }

  // Set change to 
  const handleChangeTo = (e) => {
      setChangeTo(e.target.value)
  }                    

  // Get currencies 
  const getCurrencyData = async () => {
      const { request, data } = await API.get(`/latest`)
      if (request.status === 200) {
          // console.log(data);
          const currencyData = Object.keys(data.rates)
          // console.log(changeCurrencyArray);
          setCurrencyData(currencyData);
          // console.log(latestRate);
      }
  }

  useEffect(() => {
      getCurrencyData()
  }, [])

  // Convert currency 
  const ConvertCurrency = async () => {
      const {request, data} = await API.get(`/convert?from=${changeFrom}&to=${changeTo}&amount=${amount}`)
      if (request.status === 200) {
          // console.log(res);
          setAmountConverted((data.result).toFixed(2));
          setLatestRate((data.info.rate).toFixed(2));
      }
  }

  useEffect(()=>{
    ConvertCurrency()
  },[handleChangeFrom, handleChangeTo, handleAmount])

  return (
    <>
      <img src={sgd} className="background1" />
      <div className="background2">
        <div className="container">
          <div className="leftContainer">
            <div className="header">
              <h2>Go Currency</h2>
              <p>{showDate}</p>
            </div>
            <div className="form">
              <input 
                  type='number'
                  value={amount} onChange={handleAmount}>
              </input>
              <div className="select">
                <select 
                  type = 'text' 
                  value={changeFrom} onChange={handleChangeFrom}>
                  {currencyData.map((o) => 
                    <option key={o}>{o}</option>
                  )}
                </select>
                <select 
                  type = 'text'
                  value={changeTo} onChange={handleChangeTo}>
                  {currencyData.map((o) =>
                    <option key={o}>{o}</option>
                  )}
                </select>
              </div>
            </div>
            <div className="output_field">
                <h5>{amount} {changeFrom} = {amountConverted} {changeTo}</h5>
                <p>1 {changeFrom} = {latestRate} {changeTo}</p>
            </div>
          </div>
          <CurrencyData changeFrom={changeFrom} changeTo={changeTo} />
        </div>
      </div>
    </>
  )
}

export default CurrencyConverter;