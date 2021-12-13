import React from 'react';

function Reports() {
    const [pageTitle]= ['Reports'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
        </section>
    )
}

export default Reports;

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