import React, { useState } from 'react';
import ChartArea from '../components/cards/chartArea';
import ChartCircle from '../components/cards/chartCircle';

function Dashboard() {
    const [pageTitle]= ['Dashboard'];
    const [chartArea] = useState([
        {chartHeader: 'First Chart'},
        {chartHeader: 'Second Chart'}
    ])
    const [chartCircle] = useState([
        {chartHeader: 'Third Chart'},
        {chartHeader: 'Fourth Chart'},
        {chartHeader: 'Fifth Chart'}
    ]);
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>            
            <p style={styles.areaChart}>{chartArea.map((chartArea, id) => ( 
                <ChartArea 
                key={id} 
                id={id} 
                chartArea={chartArea}
                />
            ))}</p>
            <p style={styles.circleChart}>{chartCircle.map((chartCircle, id) => ( 
                <ChartCircle 
                key={id} 
                id={id} 
                chartCircle={chartCircle}
                />
            ))}</p>
        </section>
    )
}

export default Dashboard;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px'
    },
    areaChart:{
        display: 'flex',
        ustifyContent: 'space-between',
    },
    circleChart:{
        display: 'flex',
        justifyContent: 'space-between',
    }
}