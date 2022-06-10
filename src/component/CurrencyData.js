import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import API from "../API";
import './CurrencyData.css'

const CurrencyData = (props) => {

    const {input, output} = props

    const [data1, setData1] = useState([])
    const [chartData, setChartData] =
        useState({
            labels: '',
            datasets: [{
                label: 'currency rates',
                data: ''
            }]
        })

    const d1 = new Date();
    const todayDate = d1.toISOString().slice(0, 10);
    const d1Number = d1.getTime();
    const d5Number = d1Number - (4 * 24 * 60 * 60 * 1000);
    const d5 = new Date(d5Number)
    const startDate = d5.toISOString().slice(0, 10);

    const getCurrencyData = async () => {
        const { data } = await API.get(`/timeseries?start_date=${startDate}&end_date=${todayDate}&base=${input}`)
        setData1(data.rates)
        // console.log(data);
    }

    useEffect(() => {
        getCurrencyData()
    }, [input, output])

    const function1 = () => {
        const label5Days = (Object.keys(data1));
        // console.log(label5Days);
        let array5Days = []
        const array = [data1]
        const result = array.flatMap(Object.values);
        // console.log(result);
        for (let i = 0; i < result.length; i++) {
            const result1 = Object.entries(result[i])
            // console.log(result1);
            for (let k = 0; k < result1.length; k++) {
                if (result1[k][0] === output) {
                    array5Days.push(result1[k][1]);
                }
            }
        }
        // console.log(array5Days);

        setChartData({
            labels: label5Days,
            datasets: [{
                label: 'currency rates',
                data: array5Days,
                tension:0.4,
                fill: true,
                backgroundColor:'#ffffff29',
                pointBackgroundColor:'#ffffffdb',
                borderColor: '#ffffff45',
                segment: {
                    borderWidth: '2px',
                    borderColor: '#ffffff',
                }
            }]  
        })
        console.log(chartData);
    }
    
    useEffect(() => {
        function1()
    }, [data1])

    return (
        <>
            <div className="chart">
                <p className="p">{input} vs {output}</p>
                <Line  
                    style={{display: output? true:'none'}}
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Currency rate for past 5 days',
                                fontSize:2,
                                color: '#ffffff99'
                            },
                            legend: {
                                labels: {
                                    label: {
                                        font: {
                                        size:10,
                                        color:'white' 
                                        }
                                    }
                                }
                            }
                        }
                    }} 
                    height = '200px'
                    width= '300px'
                />
            </div>
        </>
    )
}

export default CurrencyData;