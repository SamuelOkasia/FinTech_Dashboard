'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Image from "next/image";
import  "./page.css";

import Metric from "@/components/metric/metric";
import Linechart from "@/components/linechart/linechart";
import Piecharts from "@/components/piecharts/piecharts";
import Barchart from "@/components/barchart/barchart";

export default function Home() {

    const [metrics, setMetrics] = useState({
        total_revenue: 0,
        total_expenses: 0,
        net_profit: 0,
        cash_flow: 0,
        revenue_diff_percentage: 0,
        expenses_diff_percentage: 0,
        profit_diff_percentage: 0,
        cash_flow_diff_percentage: 0
    });

    const [revenueTrend, setRevenueTrend] = useState({
        labels: [],
        currentYear: [],
        previousYear: []
    });

    const [expensesBreakdown, setExpensesBreakdown] = useState([]);

    const [monthlyProfitsLosses, setMonthlyProfitsLosses] = useState({
        labels: [],
        profits: [],
        losses: []
    });

    useEffect(() => {
        axios.get('http://localhost:5000/get_data')
            .then(response => setMetrics(response.data))
            .catch(error => console.error('Error fetching data:', error));

        axios.get('http://localhost:5000/revenue_trend')
            .then(response => setRevenueTrend(response.data))
            .catch(error => console.error('Error fetching revenue trend:', error));

        axios.get('http://localhost:5000/expenses_breakdown')
            .then(response => setExpensesBreakdown(response.data))
            .catch(error => console.error('Error fetching expenses breakdown:', error));

        axios.get('http://localhost:5000/monthly_profits_losses')
            .then(response => setMonthlyProfitsLosses(response.data))
            .catch(error => console.error('Error fetching monthly profits and losses:', error));
        }, []);

  return (
    <div className='main section__padding'>
        <div className='main__title'>
            <h1 className='title'>Overview</h1>
        </div>
        <div className='main__metrics'>
            <Metric title={'Total Page'} value={metrics.total_revenue} percentage={metrics.revenue_diff_percentage} />
            <div className="main__metrics__verticalLine"></div>
            <Metric title={'Total Expenses'} value={metrics.total_expenses} percentage={metrics.expenses_diff_percentage} />
            <div className="main__metrics__verticalLine"></div>
            <Metric title={'Net Profit'} value={metrics.net_profit} percentage={metrics.profit_diff_percentage} />
            <div className="main__metrics__verticalLine"></div>
            <Metric title={'Cash Flows'} value={metrics.cash_flow} percentage={metrics.cash_flow_diff_percentage} />
            <div className="main__metrics__verticalLine"></div>
        </div>
        <div className='main__revenue'>
            <Linechart title="Page Trend" data={revenueTrend} />
        </div>
        <div className="main_b">
            <Piecharts title="Expenses Breakdown" data={expensesBreakdown} />

            {/*<Piecharts title="Expenses Breakdown" data={expensesBreakdown} />*/}

        </div>
        <Barchart title="Monthly Profits and Losses" data={monthlyProfitsLosses} />

    </div>
  );
}
