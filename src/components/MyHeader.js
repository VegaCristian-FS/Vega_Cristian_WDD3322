import React from 'react';
import {FaSearch, FaEnvelope, FaBell} from 'react-icons/fa';
import AvatarIcon from '../images/Avatar200.png';
import MyAvatar from './MyAvatar';


const MyHeader = props => {
    return(
        <header style={styles.myHeader}>
            <div style={styles.logo}>
                <h1>AFFABLE</h1>
            </div>
            <div style={styles.searchContainer}>
                <input type='text' style={styles.inputWithIcon} placeholder='Search' />
                <span style={styles.inputIcon}><FaSearch /></span>
            </div>
            <div style={styles.rightSide}>
                <button style={styles.rightIcons}><FaEnvelope /></button>
                <button style={styles.rightIcons}><FaBell /></button>
                <MyAvatar AvatarIcon={AvatarIcon}/>
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
        padding: '1%',
        backgroundColor: '#000000'
    },
    logo:{
        color: 'white',
        fontSize: '2em'
    },
    searchContainer:{
        display: 'flex',
        felxDirection: 'row',
        width: '40%'
    },
    inputIcon:{
        padding: '7px',
        color: 'white',
        borderRadius: '0 8px 8px 0',
        backgroundColor: '#136176',
        fontSize: '1rem',
        cursor: 'pointer'
    },
    inputWithIcon:{        
        border: 'none',
        flex: 1,
        paddingLeft: '15px',
        borderRadius: '8px 0 0 8px'       
    },
    rightside:{ // Figure out whats going on with this.
    },
    rightIcons:{
        margin: '5px',
        width: '35px',
        color: '#bbb',
        
    }
}