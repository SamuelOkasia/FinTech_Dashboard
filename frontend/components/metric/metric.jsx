import React from 'react';
import './metric.css'
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
const Metric = ( {title, value, percentage} ) => {
    const isPositive = percentage >= 0;

    return (
        <div className='metric'>
            <p className='small__text'>{title}</p>
            <p className='large__text'>£{value}</p>
            <p className={`small__text ${isPositive ? 'positive' : 'negative'}`}>
                {isPositive ? <BiTrendingUp /> : <BiTrendingDown />}
                {percentage}%
            </p>        </div>
    );
};

export default Metric;