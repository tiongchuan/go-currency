import { useEffect, useState } from "react";
import API from "../API";

const Get = (props) => {

    const myHeaders = new Headers();
    myHeaders.append("apikey", "A8RchVZIe3oJWxRDcwWePZmHjn5moxXM");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [money, setMoney] = useState({});

    const handleAmount = (e) => {
        setAmount(e.target.value);
        //console.log(amount);
    };

    const handleFrom = (e) => {
        setFrom(e.target.value);
        //console.log(from);
    };

    const handleTo = (e) => {
        setTo(e.target.value);
        //console.log(to);
    };

    // const fetchResponse = async () => {
    //     const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
    //     const data = await response.json();
    
    //     console.log(data);
    //     console.log(data.result);
    // };


    const handleOnConvert = async (e) => {
        //e.preventDefault();

        const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
        const data = await response.json();

        console.log(data);
        console.log(data.result);

        setMoney(data);
        props.handleResult(money.result);

        // fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        // .then(
        //     response => response.json()
        // )
        // .then(
        //     result => {
        //     console.log(result);
        //     setData(result);
        //     }
        // )
        // .catch(
        //     error => console.log('error', error)
        // );
        
    };

    useEffect (()=> {
        handleOnConvert();
    }, [])

    return (
        <>  
            <h1>Get</h1>
            <form onSubmit={handleOnConvert}>
                
                <input type="text" placeholder="amount" onChange={handleAmount}/>
                <input type="text" placeholder="currency" onChange={handleFrom}/>
                <input type="text" placeholder="currency" onChange={handleTo}/>
                {" "}
                <button>Convert</button>
                
            </form>
            
        </>
    );

}

export default Get;