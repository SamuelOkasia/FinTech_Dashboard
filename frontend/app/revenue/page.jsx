'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReusableChart from "@/components/reusablechart/reusablechart";
import FinancialDataGridg from "@/components/financialDataGrid/financialDataGridg";
const Page = () => {

    const [monthlyProfitsLosses, setMonthlyProfitsLosses] = useState({
        labels: [],
        profits: [],
        losses: []
    });

    useEffect(() => {
        axios.get('http://localhost:5000/monthly_profits_losses_page')
            .then(response => setMonthlyProfitsLosses(response.data))
            .catch(error => console.error('Error fetching monthly profits and losses:', error));
    }, []);


    return (
        <div className='revenue section__padding'>
            <h1 className='title'>Monthly Profits and Losses</h1>
            <ReusableChart title="Monthly Profits and Losses" chartType="bar" data={monthlyProfitsLosses} />
            <FinancialDataGridg />
        </div>

    );
};

export default Page;
//
// C:\Users\ojadi\portfolio\MovieGuide\fintech_backend\app\c_programs\monthly_profits_losses.exe
//
// C:\Users\ojadi\portfolio\MovieGuide\fintech_backend\c_programs\monthly_profits_losses.exe