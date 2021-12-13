import React from 'react';

function Savings() {
    const [pageTitle]= ['Savings'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
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
        paddingLeft: '2%',
        fontSize: '24px'
    }
}