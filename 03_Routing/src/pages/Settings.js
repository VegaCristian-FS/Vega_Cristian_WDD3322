import React, { useEffect, useState } from 'react';

function Settings() {
    const [pageTitle]= ['Settings'];
    const [userInfo, setuserData] = useState(null);

    useEffect(() => {
        async function fetchAPI(){
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            //const [user] = data.results;
            const [user] = data.results.map((user) => setuserData({
                avatar: `${user.picture.large}`,
                username: `${user.login.username}`,
                firstName: `${user.name.first}`,
                lastName: `${user.name.last}`,                
                password: `${user.login.password}`,
                email: `${user.email}`,
                phone: `${user.phone}`,
                steet: `${user.location.street.number} ${user.location.street.name}`,
                city: `${user.location.city}`,
                state: `${user.location.state}`,
                zip: `${user.location.postcode}`
            }));
            setuserData(user);
        }
        fetchAPI();
    }, []);
    return (
        <section style={styles.container}>
            <h1>{pageTitle}</h1>
            <section>
                {/* get info from the fetched data to fill in the props */}
                {/* <MyAvatar AvatarIcon={}/> */}
            </section>
            {/* Edit Profile
                avatar component
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