import React from 'react';
import AreaChart from '../charts/AreaChart';
const ChartArea = ({chartArea}) => {
    return (
        <article key={chartArea.id} style={styles.card}>
            <h2>{chartArea.chartHeader}</h2>
            <AreaChart/>
        </article>
    )
};
export default ChartArea;

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.4)',
        borderRadius: '8px',
        height: '350px',
        width: '740px',
        backgroundColor: '#242526',
        paddingLeft: '3rem',
        paddingTop: '1rem'
    }
}
