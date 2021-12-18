import React from 'react';
import { Link } from 'react-router-dom';
import {MdSpaceDashboard, MdAttachMoney, MdOutlineSavings} from 'react-icons/md';
import {GoReport} from 'react-icons/go';
import {GiPayMoney} from 'react-icons/gi';

const MyNav = props => {
    return(
        <aside style={styles.aside}>
            <nav>
                <ul style={styles.nav}>
                    <li><Link to='/Dashboard' style={styles.navContainer}><MdSpaceDashboard/> Dashboard</Link></li>
                    <li><Link to='/Reports' style={styles.navContainer}><GoReport/> Reports</Link></li>
                    <li><Link to='/Income' style={styles.navContainer}><MdAttachMoney/>Income</Link></li>
                    <li><Link to='/Spending' style={styles.navContainer}><GiPayMoney/>Spending</Link></li>
                    <li><Link to='/Savings' style={styles.navContainer}><MdOutlineSavings/>Savings</Link></li>
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