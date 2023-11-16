import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const PieChart = () => {
    const chartRef = useRef(null)
    const chartInstance = useRef(null)

    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d')
        chartInstance.current = new Chart(myChartRef,{
            type:'doughnut',
            data:{
                labels:['Completed',' Active','Ended'],
                datasets: [{
                    
                    data: [300, 50, 100],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                  }]
                
            }
        })
        return ()=>{
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[])
  return (
    <div className='flex justify-center mb-6 w-[500px] h-[300px] shadow-[0_3px_10px_rgb(0,0,0,0.5)] p-[1rem] rounded-2xl'>
<canvas ref={chartRef}/>
    </div>
  )
}

export default PieChart