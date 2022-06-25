import React from 'react';

function Income() {
    const [pageTitle]= ['Income'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <p>Information about your Income.</p>
        </section>
    )
}

export default Income;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px'
    }
}