import React from 'react';
import { FaEnvelope, FaBell} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AvatarIcon from '../images/Avatar200.png';
import MyAvatar from './MyAvatar';


const MyHeader = props => {
    return(
        <header style={styles.myHeader}>
            <div style={styles.logo}>
                <h1>WALLET BANK</h1>
            </div>
            
            <div style={styles.rightSide}>
                <button style={styles.rightIcons}><FaEnvelope /></button>
                <button style={styles.rightIcons}><FaBell /></button>
                <NavLink to='/Settings'> <MyAvatar AvatarIcon={AvatarIcon}/> </NavLink>
            </div>
        </header>
    )
}
export default MyHeader

const styles={
    myHeader:{
        display: 'flex',
        felxDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
        marginLeft: '200px',
        padding: '1%',
        backgroundColor: '#000000'
    },
    logo:{
        fontFamily: "manofa, sans-serif",
        color: 'white',
        fontSize: '2em'
    },
    rightIcons:{
        margin: '5px',
        width: '35px',
        color: '#bbb',
        
    }
}