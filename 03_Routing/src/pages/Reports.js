import React from 'react';

function Reports() {
    const [pageTitle]= ['Reports'];
    return (
        <section style={styles.comtainer}>
            <h1>{pageTitle}</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
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
        paddingLeft: '2%'
    }
}