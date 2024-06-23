import React from 'react';
import './nav.css'
import { MdDashboard } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { SiMlflow } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

const Nav = () => {
    return (
        <div className='nav section__padding'>
            <div className='nav__logo'>
                <h1 className='nav__logo--logo'>FINTECH</h1>
            </div>

            <div className='nav__menu'>
                <p><MdDashboard size={30} color={'#232733'}/><a href='/'>Dashboard</a></p>
                {/*<p><FaArrowTrendUp size={30} color={'#232733'}/><a href='/revenue'>Revenue</a></p>*/}
                {/*<p><GiExpense size={30} color={'#232733'}/><a href='/#aboutUs'>Expenses</a></p>*/}
                {/*<p><GoGraph size={30} color={'#232733'}/><a href='/#aboutUs'>Profit & Loss</a></p>*/}
                {/*<p><SiMlflow size={30} color={'#232733'}/><a href='/#aboutUs'>Cash Flow</a></p>*/}
                {/*<p><GiPayMoney size={30} color={'#232733'}/><a href='/#aboutUs'>Budget</a></p>*/}
                {/*<p><MdAccountBalance size={30} color={'#232733'}/><a href='/#aboutUs'>Accounts</a></p>*/}
                {/*<p><FaBalanceScale size={30} color={'#232733'}/><a href='/#aboutUs'>Finance Ratios</a></p>*/}
            </div>


        </div>
    );
};

export default Nav;