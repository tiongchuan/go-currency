


import React, { useState, useEffect, useRef } from "react";
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );


/*workin*/
const CurrencyChart = () => {

    const [barData, setBarData] = useState({
        labels: ['label 1', 'label 2', 'label 3', 'label 4'],
        datasets: [
            {
                label: 'test label',
                data: [
                    48,
                    35,
                    73,
                    82
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    });
    const [barOptions, setBarOptions] = useState({
        options: {
            scales: {
                // yAxes: [
                //     {
                //         ticks: {
                //             beginAtZero: true
                //         }
                //     }
                // ]
            },
            title: {
                display: true,
                text: 'Data Orgranized In Bars',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    })


    return (
        <div className="Barexample">
            <Line
                data={barData}
                options={barOptions.options}
            />

        </div>

    )
}
export default CurrencyChart

//------------------------------------------------------------------------------------------------
// const CurrencyChart = () => {

//     // const userData1 = [
//     //     {
//     //         id: 1,
//     //         year: 2016,
//     //         userGain: 800,
//     //         userLost: 400,
//     //     },
//     //     {
//     //         id: 2,
//     //         year: 2017,
//     //         userGain: 300,
//     //         userLost: 5600,
//     //     },
//     //     {
//     //         id: 3,
//     //         year: 2018,
//     //         userGain: 4300,
//     //         userLost: 4500,
//     //     }
//     // ]

//     // const [userData, setUserData] = useState({
//     //     labels: userData1.map((data)=>data.year),
//     //     datasets: [{
//     //         label: "Users Gained",
//     //         data: userData1.map((data)=>data.userGain)
//     //     }]
//     // })

//     // setUserData(userData1)

//     // const dataHere = ['Jan', 'Feb', 'Mar']
//     return <div>
//         <Bar
//             // data={userData}
//             data={['jan','feb']}
//         />
//         HI
//     </div>
// }
// export default CurrencyChart;

//------------------------------------------------------------------------------------------

// export default class CurrencyChart extends React.Component {

// 	chartRef = React.createRef();

// 	componentDidMount() {
// 		const ctx = this.chartRef.current.getContext("2d");

// 		new ChartJS(ctx, {
// 			type: "line",
// 			data: {
// 				labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
// 				datasets: [{
// 					data: [86,114,106,106,107,111,133],
// 					label: "Total",
// 					borderColor: "#3e95cd",
// 					backgroundColor: "#7bb6dd",
// 					// fill: False,
// 				},
// 				]
// 			},
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<canvas
// 				id="myChart"
// 				ref={this.chartRef}
// 				/>
// 			</div>
// 			)
// 	}
// }

//---------------------------------------------------------------------------------------------------------------------

// const chartConfig = {
//     type: 'bar',
//     data: {
//         labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         data: {
//             labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//             datasets: [{
//                 data: [86, 114, 106, 106, 107, 111, 133],
//                 label: "Total",
//                 borderColor: "#3e95cd",
//                 backgroundColor: "#7bb6dd",
//                 // fill: False,
//             },
//             ]
//         },
//     }}

//     const CurrencyChart = () => {
//         const chartContainer = useRef(null);
//         const [chartInstance, setChartInstance] = useState(null);

//         useEffect(() => {
//             if (chartContainer && chartContainer.current) {
//                 const newChartInstance = new ChartJS(chartContainer.current, chartConfig);
//                 setChartInstance(newChartInstance);
//             }
//         }, [chartContainer]);

//         return (
//             <div>
//                 <canvas ref={chartContainer} />
//             </div>
//         );
//     };

//     export default CurrencyChart;

//-------------------------------------------------------------------------------------------

