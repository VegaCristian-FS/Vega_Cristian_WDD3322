import React from 'react';
import CircleChart from '../charts/circleChart';

const ChartCircle = ({chartCircle}) => {
    return (
        <article key={chartCircle.id} style={styles.card}>
            <h2>{chartCircle.chartHeader}</h2>
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
        height: '300px',
        width: '400px',
        backgroundColor: '#242526',
        paddingTop: '.5rem'
    }
}