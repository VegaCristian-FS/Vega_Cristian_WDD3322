import React from 'react';
import CircleChart from '../charts/circleChart';

const ChartCircle = ({chartCircle}) => {
    return (
        <article key={chartCircle.id} style={styles.card}>
            <h2 style={styles.chartHeader}>{chartCircle.chartHeader}</h2>
            <CircleChart/>
        </article>
    )
};
export default ChartCircle;

const styles = {
    card: {
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.4)',
        borderRadius: '8px',
        height: '400px',
        width: '300px',
        margin: '20px',
        backgroundColor: '#242526'
    },
    chartHeader:{
        padding: '10px 0 0 0',
    }
}