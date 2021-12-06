import React from 'react';
import MyBtn from './buttons/MyBtn';
import MyAvatar from './MyAvatar';


const FeedPost = props => {
    return (
        <article style={styles.articleContainer}>
            <div style={styles.postHeader}>
                <MyAvatar AvatarIcon={props.val.avatarImg}/>
                <h3 style={styles.h3}>{props.val.username}</h3>
            </div>
            <p style={styles.p}>{props.val.postDetail}</p>
            <img 
                src={props.val.postImg} 
                alt={props.val.postAlt}
                style={styles.postImg}/>
            <MyBtn btnText="Edit" />
            <MyBtn btnText="Delete" />
        </article>
    )
}
export default FeedPost

const styles = {
    articleContainer:{
        margin: '10px 20px 10px 20px',
        borderRadius: '8px',
        backgroundColor: '#242526'
    },
    postHeader:{
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 20px 10px 20px',
        color: '#f7f7f7'
    },
    h3:{
        paddingLeft: '15px',
        color: '#f7f7f7',
        fontSize: '16px'
    },
    p:{
        margin: 0,
        padding: '0 20px 10px 20px',
        color: '#f7f7f7',
        fontSize: '13px',
        opacity: '.8'
    },
    postImg:{
        maxWidth: '560px'
    }
}