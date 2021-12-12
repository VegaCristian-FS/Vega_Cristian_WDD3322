import React from 'react';

function Savings() {
    const [pageTitle]= ['Savings'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <p>Settings</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default Savings;

const styles = {
    container: {
        display: 'felx',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '2%'
    }
}