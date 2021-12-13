import React from 'react';

function Income() {
    const [pageTitle]= ['Income'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
        </section>
    )
}

export default Income;

const styles = {
    container: {
        display: 'felx',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '20px',
        fontSize: '24px'
    }
}