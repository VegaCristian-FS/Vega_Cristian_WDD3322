import React from 'react';

function Settings() {
    const [pageTitle]= ['Settings'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
        </section>
    )
}

export default Settings;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px'
    }
}