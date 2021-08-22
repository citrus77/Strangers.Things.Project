import React, { useEffect } from 'react';

const { REACT_APP_BASE_URL } = process.env;

const Profile = ({ messages, setMessages, token, userData, setUserData }) => {
    useEffect (() => {       
        const fetchUser = async () => {
            try {
                const response = await fetch(`${REACT_APP_BASE_URL}/users/me`, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    },
                  });
                const results = await response.json();
                setUserData(results);
            } 
            catch(error) {
                console.error(error);
            };                
        };
        fetchUser();
        console.log('userData:', userData)
    }, []);

    return <>
        {
        userData.data ? <h2 className='header'>Welcome {`${userData.data.username}`} </h2> : ''
        }

    </>;
};

export default Profile;