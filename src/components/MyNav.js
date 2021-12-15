import React from 'react';
import { NavLink } from 'react-router-dom';
import {MdSpaceDashboard, MdAttachMoney, MdOutlineSavings} from 'react-icons/md';
import {GoReport} from 'react-icons/go';
import {GiPayMoney} from 'react-icons/gi';

const MyNav = props => {
    return(
        <aside style={styles.aside}>
            <nav>
                <ul style={styles.nav}>
                    <li><NavLink to='/Dashboard' style={styles.navContainer}><MdSpaceDashboard/> Dashboard</NavLink></li>
                    <li><NavLink to='/Reports' style={styles.navContainer}><GoReport/> Reports</NavLink></li>
                    <li><NavLink to='/Income' style={styles.navContainer}><MdAttachMoney/>Income</NavLink></li>
                    <li><NavLink to='/Spending' style={styles.navContainer}><GiPayMoney/>Spending</NavLink></li>
                    <li><NavLink to='/Savings' style={styles.navContainer}><MdOutlineSavings/>Savings</NavLink></li>
                </ul>
                
            </nav>
        </aside>
    )
}
export default MyNav

const styles = {
    aside:{
        zIndex: '1',
        position: 'fixed',
        top: '0',
        left: '0',
        paddingTop: '100px',
        display: 'block',
        height: '100vh',
        fontSize:'1.5rem',
        backgroundColor: '#242526'
    },
    nav:{
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        width: '200px'
    },
    navContainer:{
        display: 'block',
        color: '#D3D3D3',
        padding: "8px 16px",
        textAlign: "left",
        textDecoration: 'none',

        "&:hover":{
            backgroundColor: "#555",
            color: "black"
        }
    }
}