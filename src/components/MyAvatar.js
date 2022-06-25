import React from 'react';

const MyAvatar = props => {
    return(
            <img src={props.AvatarIcon} alt={props.AvatarAlt} Height={props.Height} style={styles.avatar, imgStyles} />
    )
}
export default MyAvatar

const styles = props => ({
    avatar:{
        height: props.Height
    }
});

const imgStyles = {
    cursor: 'pointer',
    borderRadius: '50%'
}