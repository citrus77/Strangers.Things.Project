import React, { useState } from 'react';
import { APIURL } from '../api';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Register = (props, { setUser, setToken }) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const history = useHistory()

    const newUser = async () => {
        fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                username: `${username}`,
                password: `${password}`
                }
            })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
                setToken(result.data.token)
            })
            .catch(console.error);
    }

    return <>
    <main className='content'>
        <header className='post-header'>
            <span className='placeholder' />
            <h3 className='header'>Register a new account</h3>
            <span className='placeholder' />
        </header>
        <div className='form-container'>
            <form className='log-reg' onSubmit={async (event) =>{
                event.preventDefault();
                const resp = await fetch(`${APIURL}/users/register`, {
                    method: "POST",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                    })
                });
                const respObj = await resp.json();
                if(respObj.data) {
                    setToken(respObj.data.token);
                    setUser(respObj.data.user);
                    if (respObj.data.token) {
                        history.push('/');
                    }
                }
            }}>
                <span>Please choose a user name</span>
                <input 
                    className='input-field' 
                    type='text' name='username' 
                    placeholder='choose a user name' 
                    onChange={(event) => setUsername(event.target.value)}
                />
                <span>Please choose a password</span>
                <input 
                    className='input-field' 
                    type='password' name='password' 
                    placeholder='type a password' 
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input 
                    className='input-field' 
                    type='password' name='password' 
                    placeholder='re-type your password' 
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className='button' type='submit'>Register</button> 
            </form>
        
            <Link to="/account/login" className='link-to-reg-login'>Already have an account? Click here to login!</Link>
        </div>
    </main>
</>
}

export default Register;