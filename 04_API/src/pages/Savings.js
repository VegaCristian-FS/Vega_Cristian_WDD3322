import React from 'react';

function Savings() {
    const [pageTitle]= ['Savings'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <p>Planning to start saving? You are in the right place.</p>
        </section>
    )
}

export default Savings;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px'
    }
}