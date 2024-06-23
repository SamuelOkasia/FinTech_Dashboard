import React from 'react';
import ReactECharts from 'echarts-for-react';
import './barchart.css'

const BarChart = ({ title, data }) => {
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
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            data: ['Profit', 'Loss'],
            bottom: 'bottom',
            textStyle: {
                fontFamily: 'Arial, sans-serif',
                fontSize: 14,
                color: '#666',
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
            data: data.labels,
            axisLabel: {
                fontFamily: 'Arial, sans-serif',
                fontSize: 12,
                color: '#999',
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                fontFamily: 'Arial, sans-serif',
                fontSize: 12,
                color: '#999',
            },
        },
        series: [
            {
                name: 'Profit',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: 'rgba(75, 192, 192, 1)',
                },
                data: data.profits,
            },
            {
                name: 'Loss',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: 'rgba(255, 99, 132, 1)',
                },
                data: data.losses,
            },
        ],
    };

    return <ReactECharts option={options} className="Barchart" />;
};

export default BarChart;
