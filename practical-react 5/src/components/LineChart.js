import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                fill: true,
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },

            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 4, 1],
                fill: true,
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)'
            }

        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,

                    }
                }
            ]
        }

    }

    return <div>
    <p style={{textAlign: 'center'}}>Line Chart</p>
    <Line data={data} options={options} />
 </div>
}

export default LineChart
