import React from 'react';
import AvatarIcon from '../images/Avatar200.png';
import MyBtn from './buttons/MyBtn';
import MyAvatar from './MyAvatar';


const MyForm = props => {
    return (
        <form style={styles.myForm} >
            <div style={styles.inputContainer} >
                <MyAvatar AvatarIcon={AvatarIcon}/>
                <input type="text" styles={styles.inputField} placeholder="What's on your mind?" ></input>
            </div>
            <MyBtn btnText="Post" style={styles.btn}/>
        </form>
    )
}
export default MyForm

const styles = {
    myForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#242526',
        borderRadius: '8px',
        width: '500px',
        height: '120px'
    },
    inputField: {
        borderRadius: '8px'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: "20px",
    },
    
    btn: {
    }
}