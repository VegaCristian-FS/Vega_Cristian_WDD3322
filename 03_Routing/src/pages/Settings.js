import React from 'react';

function Settings() {
    const [pageTitle]= ['Settings'];
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default Settings;

const styles = {
    container: {
        display: 'felx',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
        paddingLeft: '2%',
    }
}