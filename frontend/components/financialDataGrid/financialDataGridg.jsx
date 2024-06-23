'use client'

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'month', headerName: 'Month', width: 150 },
    { field: 'revenue', headerName: 'Revenue', type: 'number', width: 150 },
    { field: 'expenses', headerName: 'Expenses', type: 'number', width: 150 },
    { field: 'profit', headerName: 'Profit', type: 'number', width: 150 },
];

const FinancialDataGrid = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/monthly_revenue_data')
            .then(response => {
                const data = response.data;
                const formattedData = data.map((item, index) => ({
                    id: index + 1,
                    month: item.month,
                    revenue: item.revenue,
                    expenses: item.expenses,
                    profit: item.profit,
                }));
                setRows(formattedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={12} />
        </div>
    );
};

export default FinancialDataGrid;
