import React from 'react';
import ReactECharts from 'echarts-for-react';

import './piecharts.css'
const Piecharts = ( {title,data} ) => {

    const options = {
        title: {
            text: title,
            left: 'center',
            textStyle: {
                fontFamily: 'Arial, sans-serif',
                fontSize: 18,
                color: '#333',
            },
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            show: false, // Hide the legend
        },
        series: [
            {
                name: 'Expenses',
                type: 'pie',
                radius: '50%',
                data: data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
                label: {
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 14,
                    color: '#333',
                    formatter: '{b}: {c} ({d}%)', // Show name, value, and percentage
                },
            },
        ],
    };

    return (
        <div className='Piechart'>
            <ReactECharts option={options} className="chart-container" />
        </div>
    );
};

export default Piecharts;