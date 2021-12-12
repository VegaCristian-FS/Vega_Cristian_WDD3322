import React from 'react';
import { NavLink } from 'react-router-dom';
import {MdSpaceDashboard, MdAttachMoney, MdOutlineSavings} from 'react-icons/md';
import {GoReport} from 'react-icons/go';
import {GiPayMoney} from 'react-icons/gi';

const MyNav = props => {
    return(
        <aside style={styles.aside}>
            <nav >
                <NavLink to='/Dashboard' style={styles.navContainer}><MdSpaceDashboard/> Dashboard</NavLink>
                <NavLink to='/Reports' style={styles.navContainer}><GoReport/> Reports</NavLink>
                <NavLink to='/Income' style={styles.navContainer}><MdAttachMoney/>Income</NavLink>
                <NavLink to='/Spending' style={styles.navContainer}><GiPayMoney/>Spending</NavLink>
                <NavLink to='/Savings' style={styles.navContainer}><MdOutlineSavings/>Savings</NavLink>
            </nav>
        </aside>
    )
}
export default MyNav

const styles = {
    aside:{
        display: 'flex',
        flexDirection: 'column',
        fontSize:'1.5rem',
        backgroundColor: '#242526'
    },
    navContainer:{
        padding: '1%'
    }
}