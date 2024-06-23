import React from 'react';
import ReactECharts from 'echarts-for-react';

import './linechart.css'
const Linechart = ( {title, data} ) => {

    const options = {
        title: {
            text: title,
            textStyle: {
                fontFamily: 'Montserrat',
                fontSize: 20,
                color: '#333',
            },
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(50, 50, 50, 0.8)',
            textStyle: {
                color: '#fff',
            },
            padding: 10,
            borderRadius: 4,
        },
        legend: {
            data: ['Current Year', 'Previous Year'],
            textStyle: {
                fontFamily: 'Montserrat',
                fontSize: 18,
                color: '#232733',
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.labels,
            axisLabel: {
                fontFamily: 'Montserrat',
                fontSize: 12,
                color: '#232733',
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                fontFamily: 'Montserrat',
                fontSize: 12,
                color: '#232733',
            },
        },
        series: [
            {
                name: 'Current Year',
                type: 'line',
                data: data.currentYear,
                smooth: true,
                lineStyle: {
                    width: 3, // Line thickness
                    color: 'rgba(75, 192, 192, 1)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10, // Outline effect
                },
                areaStyle: {
                    color: 'rgba(75, 192, 192, 0.2)',
                },
            },
            {
                name: 'Previous Year',
                type: 'line',
                data: data.previousYear,
                smooth: true,
                lineStyle: {
                    width: 3, // Line thickness
                    color: 'rgba(153, 102, 255, 1)',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10, // Outline effect
                },
                areaStyle: {
                    color: 'rgba(153, 102, 255, 0.2)',
                },
            },
        ],
    };

    return (
        <div>
            <ReactECharts option={options} style={{ height: '400px', width: '100%' }} />
        </div>
    );
};

export default Linechart;