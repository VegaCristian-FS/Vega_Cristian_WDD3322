import React from 'react';
import AvatarIcon from '../images/Avatar200.png';
import MyBtn from './buttons/MyBtn';
import MyAvatar from './MyAvatar';


const MyForm = props => {
    return (
        <form style={styles.myForm} onSubmit={props.addItem} >
            <div style={styles.inputContainer} >
                <MyAvatar AvatarIcon={AvatarIcon}/>
                <input type="text" value={props.postDetail} onChange={props.getInput} style={styles.inputField} placeholder="What's on your mind?" />
            </div>
            <div style={styles.btnPlacement}>
                <MyBtn btnText="Post" />
            </div>
        </form>
    )
}
export default MyForm

const styles = {
    myForm: {
        display: 'flex',
        margin: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#242526',
        borderRadius: '8px',
    },
    inputField: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        marginLeft: '10px',
        borderRadius: '8px',
        width: '80%'
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
    },
    btnPlacement: {
        display: 'flex',
        justifyContent: 'end',
        marginRight: '20px'
    }
}