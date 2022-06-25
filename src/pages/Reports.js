import React from 'react';

function Reports() {
    const [pageTitle]= ['Reports'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <p>Any alerts or messages would be found here.</p>
        </section>
    )
}

export default Reports;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px'
    }
}