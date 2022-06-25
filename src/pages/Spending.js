import React from 'react';

function Spending() {
    const [pageTitle]= ['Spending'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <p>How much you plan to spend information would be here.</p>
        </section>
    )
}

export default Spending;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px'
    }
}