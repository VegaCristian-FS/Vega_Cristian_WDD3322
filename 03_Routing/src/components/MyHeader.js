import React from 'react';
import { FaBell} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AvatarIcon from '../images/Avatar200.png';
import MyAvatar from './MyAvatar';


const MyHeader = props => {
    return(
        <header style={styles.myHeader}>
            <div style={styles.logo}>
                <h1>WALLET BANK</h1>
            </div>
            
            <div style={styles.rightSide}>
                <button style={styles.rightIcons}><FaBell /></button>
                <Link to='/Settings'> <MyAvatar AvatarIcon={AvatarIcon}/></Link>
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
        position: 'fixed',
        zIndex: '1',
        height: '50px',
        width: 'calc(100% - 240px)',
        marginLeft: '200px',
        padding: '20px',
        backgroundColor: '#000000'
    },
    logo:{
        fontFamily: "manofa, sans-serif",
        color: 'white',
        fontSize: '2em'
    },
    rightIcons:{
        margin: '15px',
        width: '35px',
        color: '#bbb',
        backgroundColor: '#000',
        border: '#000',
        fontSize: '1.8rem'
    }
}