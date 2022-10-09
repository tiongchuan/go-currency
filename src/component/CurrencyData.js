import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import API from "../API";
import './CurrencyData.css'

const CurrencyData = (props) => {

  // Pass in props from CurrencyConverter.js
  const {changeFrom, changeTo} = props

  const [data1, setData1] = useState([])
  const [chartData, setChartData] =
    useState({
      labels: '',
      datasets: [{
        label: 'currency rates',
        data: ''
      }]
    })

  // Get start date and end date
  let date = new Date()
  let endDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`  
  let startDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()-6}`

  const getCurrencyData = async () => {
    const { data } = await API.get(`/timeseries?start_date=${startDate}&end_date=${endDate}&base=${changeFrom}&symbols=${changeTo}`)
    setData1(data.rates)
    // console.log(data);
  }

  useEffect(() => {
    getCurrencyData()
  }, [changeFrom, changeTo])

  // Get labels and data for chart  
  const getChartData = () => {
    let labels = Object.keys(data1)  // Get dates
    let data = Object.values(data1)  // Get rates
    let data2 = data.map((item) => {  // Get rates for selected currency
      return item[changeTo]
    })
    setChartData({  
      labels: labels,
      datasets: [{
        label: `${changeFrom} to ${changeTo}`,
        data: data2,
        fill: true,
        backgroundColor:'#ffffff29' 
      }]
    })
  }

  useEffect(() => {
    getChartData()
  }, [data1])

  return (
    <>
      <div>
        <Line  
          className="chart"
          style={{display: changeFrom? true:'none'}}
          data={chartData}
          options={{
            // Change the color of x-axis and y-axis
            scales: {
              x: {
                ticks: {
                  color: '#ffffff',
                  font: {
                    size: 9
                  }
                }
              },
              y: {
                ticks: {
                  color: '#ffffff',
                  font: {
                    size: 9
                  }
                }
              }
            },

            // Set border color of the chart area 
            elements: {
              line: {
                borderColor: '#ffffff',
                borderWidth: 1
              },
              point: {
                radius: 1,
                borderColor: '#ffffff',
              }
            },
            
            // Set title of the chart
            plugins: {
              title: {
                display: true,
                text: 'Currency rate for past 7 days',
                color: '#ffffff',
                font: {
                  size: 13
                }
              },

              // Change the color of the label
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: '#ffffff',
                  font: {
                    size: 10
                  }
                }
              }
            }
          }} 

          // Set the height and the width of the chart 
          height={333}
          width={420}
        />
      </div>
    </>
  )
}

export default CurrencyData;