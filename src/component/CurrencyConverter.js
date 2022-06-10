import React, { useEffect, useState } from "react";
import CurrencyData from "./CurrencyData";
import API from "../API";
import './CurrencyConverter.css'

const CurrencyConverter = () => {

    const [input, setInput] = useState('SGD');
    const [output, setOutput] = useState('USD');
    const [amount, setAmount] = useState(1);
    const [latestRate, setLatestRate] = useState([])
    const [amountConverted, setAmountConverted] = useState('');
    const [conversionRate, setConversionRate] = useState('');

    let date = new Date()
    let showDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleOutput = (e) => {
        setOutput(e.target.value)
    }                    
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const GetLatestRate = async () => {
        const { request, data } = await API.get(`/latest`)
        if (request.status === 200) {
            // console.log(data);
            const changeCurrencyArray = Object.keys(data.rates)
            // console.log(changeCurrencyArray);
            setLatestRate(changeCurrencyArray);
            // console.log(latestRate);
        }
    }

    useEffect(() => {
        GetLatestRate()
    }, [])

    const ConvertCurrency = async () => {
        const {request, data} = await API.get(`/convert?from=${input}&to=${output}&amount=${amount}`)
        if (request.status === 200) {
            // console.log(res);
            setAmountConverted((data.result).toFixed(3));
            setConversionRate((data.info.rate).toFixed(3));
        }
    }

    useEffect(()=>{
        ConvertCurrency()
    },[handleInput, handleOutput])

    return (
        <>
            <div className="background"></div>
            <div className="container">
                <div className="header">
                    <h2>Go Currency</h2>
                    <p>{showDate}</p>
                </div>
              
                <div className="form">
                    <input 
                        type='number'
                        value={amount} onChange={handleAmount}>
                    </input>
                    <select 
                        type = 'text' 
                        value={input} onChange={handleInput}>
                        {latestRate.map((o) => 
                            <option key={o}>{o}</option>
                        )}
                     </select>
                    <select 
                        type = 'text'
                        value={output} 
                        onChange={handleOutput}>
                        {latestRate.map((o) =>
                            <option key={o}>{o}</option>
                        )}
                    </select>
                </div>
                <div className="output_field">
                    <h5>{amount} {input} = {amountConverted} {output}</h5>
                    <p>1 {input} = {conversionRate} {output}</p>
                </div>
            <CurrencyData input={input} output={output}/>
            </div>
        </>
    )
}

export default CurrencyConverter;