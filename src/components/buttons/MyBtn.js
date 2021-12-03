import React from 'react';


const MyBtn = props => {
    return (
        <button style={styles.mainBtn}>
            {props.btnText}
        </button>
    )
}
export default MyBtn


const styles = {
    mainBtn: {
        margin: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: '#136176',
        color: 'white',
        width: '60px',
        fontWeight: 'bold'
    },
    '&:hover': {
        color: 'white', 
        backgroundColor: '#000'
    }
}