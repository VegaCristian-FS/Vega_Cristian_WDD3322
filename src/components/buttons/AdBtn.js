import React from 'react';

const AdBtn = props => {
    return (
        <button style={styles.mainBtn}>
            {props.btnText}
        </button>
    )
}
export default AdBtn


const styles = {
    mainBtn: {
        margin: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#242526',
        color: '#f7f7f7',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
}