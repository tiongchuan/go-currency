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
    const [date1, setDate1] = useState('')

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
        await API.get(`/convert?from=${input}&to=${output}&amount=${amount}`)
            .then(res => {
                // console.log(res);
                setAmountConverted((res.data.result).toFixed(2));
                setConversionRate((res.data.info.rate).toFixed(2));
                setDate1(res.data.date);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(()=>{
        ConvertCurrency()
    },[handleInput, handleOutput])

    return (
        <>
            <div className="background"></div>
            <div className="container">
            <h2>Currency Converter</h2>
            <div className="form">
            <input 
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
            <div className="output">
                <p>Amount Converted: {amountConverted}</p>
                <p>Conversion Rate: {conversionRate}</p>
                <p> Conversion Date: {date1}</p>
            </div>
            
            <CurrencyData input={input} output={output}/>
            
            </div>
        </>
    )
}

export default CurrencyConverter;