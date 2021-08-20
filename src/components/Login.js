import React, { useState } from 'react';
import { APIURL } from '../api'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

const Login = ({ setUser, setToken }) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const history = useHistory();

    return <>
    <main className='content'>
        <header className='post-header'>
            <span className='placeholder' />
            <h2 className='header'>Login to your account</h2>
            <span className='placeholder' />
        </header>
        <div className='form-container'>
            <form className='log-reg' onSubmit={async (event) =>{
                event.preventDefault();
                const resp = await fetch(`${APIURL}/users/login`, {
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
                <span>User name</span>
                <input 
                    className='input-field' 
                    type='text'
                    placeholder='enter your user name' 
                    onChange={(event) => setUsername(event.target.value)}
                />
                <span>Password</span>
                <input 
                    className='input-field' 
                    type='password' name='password'
                    placeholder='enter your password' 
                    onChange={(event) => setPassword(event.target.value)}
                    />
                
                <button type="submit" disabled={!password || !username || password.length<6}>Login</button>
            </form>
            
            <Link to="/account/register" className='link-to-reg-login'>Don't have an account yet? Click here to register!</Link>
        </div>
    </main>
</>
};

export default Login;