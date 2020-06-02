import React,{useEffect} from 'react'
import './chart.css'
import * as chart from 'chart.js'
let Chart = ({width, height, x, y,label, type})=>{
    useEffect(()=>{
        let ctx = document.getElementById('ch').getContext('2d')
        let myChart = new chart.Chart(ctx, {
            type: type,
            data: {
                labels: x,
                datasets: [{
                    label: label,
                    data: y,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    fill: type == 'line'? false: true
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                        
                    }]
                }
            }
        });
    })
    return(
        <div style={{height:height,width:width}}>
            <canvas id="ch" style={{width:"100%",height:"100%"}}>
            </canvas>
        </div>
    )
}
export default Chart
