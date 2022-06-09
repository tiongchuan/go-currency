
import React, { useEffect, useState } from "react";
import CurrencyData from "./CurrencyData";
import './Main.css';


const axios = require("axios");

const CurrencyConverter = () => {

    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [amount, setAmount] = useState('');
    const [latestRate, setLatestRate] = useState([])
    const [amountConverted, setAmountConverted] = useState('');
    const [conversionRate, setConversionRate] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleOutput = (e) => {
        setOutput(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const [date1, setDate1] = useState('')

    const GetLatestRate = async () => {
        const { request, data } = await axios.get(`https://api.exchangerate.host/latest`)
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


    const ConvertCurrency =  async() => {
        const {request,data} = await axios.get(`https://api.exchangerate.host/convert?from=${input}&to=${output}&amount=${amount}`)
            if (request.status === 200) { 
                setAmountConverted(data.result);
                setConversionRate(data.info.rate);
                setDate1(data.date);
            }
    }
    useEffect(()=>{
        ConvertCurrency()
    },[handleInput, handleOutput])

    return (
        <>
            <h1>Currency Converter</h1>

            <select value={input} onChange={handleInput}>
                <option></option>
                {latestRate.map((o) => {
                    return <option key={o}>{o}</option>
                })}
            </select>

            <input className="amount" placeholder="Amount to Convert"
                value={amount} onChange={handleAmount}>
            </input>

            <div className="equals">=</div>

            <select value={output} onChange={handleOutput}>
                <option></option>
                {latestRate.map((o) => {
                    return <option key={o}>{o}</option>
                })}
            </select>

            <div>
                <p>Amount Converted: {amount?amountConverted:null}</p>
                <p>Conversion Rate: {conversionRate}</p>
                {/* <p> Conversion Date: {date1}</p> */}
            </div>

            <CurrencyData input={input} output={output}/>
        </>
    )
}

export default CurrencyConverter;