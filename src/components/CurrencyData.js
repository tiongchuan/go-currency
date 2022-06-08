

import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    // CategoryScale,
    // LinearScale,
    // BarElement,
    // Title,
    // Tooltip,
    // Legend,
} from 'chart.js';

const axios = require("axios");

const CurrencyData = (props) => {

    const [data1, setData1] = useState([])
    const [chartData, setChartData] =
        useState({
            labels: '',
            datasets: [{
                label: 'currency rates',
                data: ''
            }]
        })

    const input = props.input;
    const output = props.output;

    const d1 = new Date();
    const todayDate = d1.toISOString().slice(0, 10);
    const d1Number = d1.getTime();
    const d5Number = d1Number - (4 * 24 * 60 * 60 * 1000);
    const d5 = new Date(d5Number)
    const startDate = d5.toISOString().slice(0, 10);

    const getCurencyData = async () => {
        const { data } = await axios.get(`https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${todayDate}&base=${input}`)
        setData1(data.rates)
        console.log(data);
    }

    console.log(data1);

    // useEffect(() => {
    //     getCurencyData()
    // }, [])

    const function1 = () => {
        const label5Days = (Object.keys(data1));
        // console.log(label5Days);
        let array5Days = []
        const array = [data1]
        const result = array.flatMap(Object.values);
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            const result1 = Object.entries(result[i])
            console.log(result1);
            for (let k = 0; k < result1.length; k++) {
                if (result1[k][0] === output) {
                    array5Days.push(result1[k][1]);
                }
            }
        }
        console.log(array5Days);

        setChartData({
            labels: label5Days,
            datasets: [{
                label: 'currency rates',
                data: array5Days,
            }]
        })
        console.log(chartData);
    }
    // useEffect(() => {
    //     function1()
    // }, [])



    return (
        <>
            <div>
                <p>{input}{output}</p>
            </div>

            <button onClick={()=>{getCurencyData();function1()}}>5 days History</button>

            <Line
                data={chartData}
                // options={{
                //     title: {
                //         display: true,
                //         text: 'Currency rate for past 5 days',
                //         fontSize: 20
                //     },
                //     legend: {
                //         display: true,
                //         position: 'right',
                //     }
                // }}
            />
        </>
    )
}

export default CurrencyData;
