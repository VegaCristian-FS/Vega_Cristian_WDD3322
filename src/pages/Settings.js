import React, { useEffect, useState } from 'react';
import MyAvatar from '../components/MyAvatar';
import MyProfile from '../components/MyProfile';

function Settings() {
    const [pageTitle]= ['Settings'];
    const [userData, setState] = useState(null);

    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const [user] = data.results;                
            setState(user);
        }
        fetchAPI();
    }, []);
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <article style={styles.formContainer}>
                <div style={styles.profileHeader}>
                    <h2>Edit Profile</h2>
                    {userData && <MyAvatar AvatarIcon={userData.picture.large} Height={'150'}/>}
                </div>
                <div>
                    {userData && <MyProfile 
                    username={userData.login.username}
                    password={userData.login.password}
                    fName={userData.name.first}
                    lName={userData.name.last}
                    phone={userData.phone}
                    street={`${userData.location.street.number}  ${userData.location.street.name}`}
                    city={userData.location.city}
                    state={userData.location.state}
                    zip={userData.location.postcode}
                    />}
                    

                </div>
                
            </article>
            {/* 
                form
                username
                password
                phone
                First name / Last name
                street
                city / state / postcode

                save edit button
                 */}
        </section>
    )
}

export default Settings;

const styles = {
    container: {
        textAlign: 'left',
        display: 'felx',
        flexDirection: 'column',
        paddingLeft: '250px',
        fontSize: '24px',
        
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '20px',
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.4)',
        borderRadius: '8px',
        backgroundColor: '#242526'
    },
    profileHeader:{
        margin: '0 auto',
        fontSize: '20px'
    }
}