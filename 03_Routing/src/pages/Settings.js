import React, { useEffect, useState } from 'react';
import MyAvatar from '../components/MyAvatar';

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
            <article>
                <div style={styles.profileHeader}>
                    <h2 style={styles.editHeader}>Edit Profile</h2>
                    {userData && <MyAvatar AvatarIcon={userData.picture.large} Height={'150'}/>}
                </div>
                <div>
                    {/* {userData && </>}   */}
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
        fontSize: '24px'
    }
}