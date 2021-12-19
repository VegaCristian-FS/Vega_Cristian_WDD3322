import React from 'react';

const MyProfile = (props) => {
    return(
        <section style={styles.container}>
            <form>   
                <div>
                    <p>
                        <label >Username</label>
                        <input></input>
                    </p>
                    <p>
                        <label >Password</label>
                        <input></input>
                    </p>
                </div>
                <div>            
                    <p>
                        <label >First Name</label>
                        <input></input>
                    </p>
                    <p>
                        <label >Last Name</label>
                        <input></input>
                    </p>
                </div> 
                <div>            
                    <p>
                        <label >Phone</label>
                        <input></input>
                    </p>
                </div> 
                <div>            
                    <p>
                        <label >Street</label>
                        <input></input>
                    </p>
                </div> 
                <div>            
                    <p>
                        <label >City</label>
                        <input></input>
                    </p>
                    <p>
                        <label >State</label>
                        <input></input>
                    </p>
                    <p>
                        <label >Zip</label>
                        <input></input>
                    </p>
                </div> 
                
            </form>
        </section>
    )
}