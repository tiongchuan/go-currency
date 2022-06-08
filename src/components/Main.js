
import React, { useEffect, useState } from "react";

const axios = require("axios");

const GoCurrency = () => {

    const [input, setInput] = useState('');
    const [latestRate, setLatestRate] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value)
    }

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

    // const getRandomId = (max) => {
    //     return Math.floor(Math.random()*max)
    // }

    return (
        <>

            <form>
                <select value={input} onChange={handleInput}>
                    {latestRate.map((o) => {
                        return <option >
                            {o}
                        </option>
                    })}
                </select>



            </form>

        </>
    )
}

export default GoCurrency;