import React from 'react';
import StreetImg from '../images/advertise01.jpeg'
import AdBtn from './buttons/AdBtn';

const MyAds = props => {
    return(
        <article style={styles.myArticle}>
            <img src={StreetImg} alt="People walking a street in New York City" />
            <h1 style={styles.adTitle}>{props.cardTitle}</h1>
            <p style={styles.adDetails}>{props.cardDetail}</p>
            <div style={styles.adbtn}>
                <AdBtn btnText="Learn More"/>
                <AdBtn btnText="Share"/>
            </div>
        </article>
    )
}
export default MyAds;

const styles= {
    myArticle: {
        position: 'static',
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
        paddingTop: '20px',
        width: '250px',
        color: "#f7f7f7",
        backgroundColor: '#242526',
        borderRadius: '8px',
        lineHeight: '.5'
    },
    adTitle:{
        paddingLeft: '10px',
        fontWeight: '900'
    },
    adDetails:{
        paddingLeft: '10px',
        fontSize: '13px',
        opacity: '.8'
    }
}