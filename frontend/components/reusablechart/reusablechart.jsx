import React from 'react';
import ReactECharts from 'echarts-for-react';

const ReusableChart = ({ title, chartType, data, options }) => {
    const getOptions = () => {
        switch (chartType) {
            case 'line':
                return {
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
                    },
                    legend: {
                        data: ['Current Year', 'Previous Year'],
                        bottom: 'bottom',
                        textStyle: {
                            fontFamily: 'Arial, sans-serif',
                            fontSize: 14,
                            color: '#666',
                        },
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
                            name: 'Current Year',
                            type: 'line',
                            data: data.currentYear,
                            smooth: true,
                            lineStyle: {
                                color: 'rgba(75, 192, 192, 1)',
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
                                color: 'rgba(153, 102, 255, 1)',
                            },
                            areaStyle: {
                                color: 'rgba(153, 102, 255, 0.2)',
                            },
                        },
                    ],
                };
            case 'pie':
                return {
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
                        show: false,
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
                                formatter: '{b}: {c} ({d}%)',
                            },
                        },
                    ],
                };
            case 'bar':
                return {
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
            default:
                return options;
        }
    };

    return <ReactECharts option={getOptions()} className="chart-container" />;
};

export default ReusableChart;
