import React from 'react';

const MyProfile = (props) => {
    return(
        <section style={styles.container}>
            <form style={styles.form} onSubmit={props.form}>   
                <div style={styles.inputRow}>
                    <p style={styles.field}>
                        <label >Username</label>
                        <input type='text' value={props.username} placeholder='Username' style={styles.input}></input>
                    </p>
                    <p style={styles.field}>
                        <label >Password</label>
                        <input type='password' value={props.password} placeholder='Password' style={styles.input}></input>
                    </p>
                </div>
                <div style={styles.inputRow}>            
                    <p style={styles.field}>
                        <label >First Name</label>
                        <input type='text' value={props.fName} placeholder='First name' style={styles.input}></input>
                    </p>
                    <p style={styles.field}>
                        <label >Last Name</label>
                        <input type='text' value={props.lName} placeholder='Last name' style={styles.input}></input>
                    </p>
                </div> 
                <div style={styles.inputRow}>            
                    <p style={styles.field}>
                        <label >Phone</label>
                        <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={props.phone} placeholder='123-456-7890' style={styles.input}></input>
                    </p>
                </div> 
                <div style={styles.inputRow}>            
                    <p style={styles.field}>
                        <label >Street</label>
                        <input type='text' value={props.street} placeholder='Street name' style={styles.input}></input>
                    </p>
                </div> 
                <div style={styles.inputRow}>            
                    <p style={styles.field}>
                        <label >City</label>
                        <input type='text' value={props.city} placeholder='City' style={styles.input}></input>
                    </p>
                    <p style={styles.field}>
                        <label >State</label>
                        <input type='text' value={props.state} placeholder='State' style={styles.stateZip}></input>
                    </p>
                    <p style={styles.field}>
                        <label >Zip</label>
                        <input type='text' value={props.zip} placeholder='Postal Code' style={styles.stateZip}></input>
                    </p>
                </div>
            </form>
        </section>
    )
}
export default MyProfile

const styles = {
    container:{
        display: 'felx',
        flexDirection: 'column',
        fontSize: '24px',
    },
    field:{
        display: 'flex',
        flexDirection: 'column',
        margin: '10px'
    },
    input:{
        borderRadius: '5px',
        lineHeight: '20px',
        backgroundColor: 'transparent',
        border: '2px solid #de8f8f',
        padding: '10px',
        width: '350px',
        color: '#ffffff'
    },
    inputRow:{
        display: 'flex',
        flexDirection: 'row'
    },
    stateZip:{
        borderRadius: '5px',
        lineHeight: '20px',
        backgroundColor: 'transparent',
        border: '2px solid #de8f8f',
        padding: '10px',
    },
    
}