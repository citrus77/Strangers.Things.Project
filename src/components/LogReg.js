import React, { useState } from 'react';
import { APIURL } from '../api'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router';

const LogReg = ({ setUser, setToken }) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ verPass, setVerPass ] = useState('');
    const params = useParams();
    const history = useHistory();

    return <>
    <main className='content'>
        <header className='post-header'>
            <span className='placeholder' />
            {
            params.method === 'register' ? <h3 className='header'>Register a new account</h3> : <h3 className='header'>Login to your account</h3>
            }
            
            <span className='placeholder' />
        </header>
        <div className='form-container'>
            <form className='log-reg' onSubmit={async (e) =>{
                e.preventDefault();
                const resp = await fetch(`${APIURL}/users/${params.method}`, {
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
                    console.log('respObj: ', respObj)
                    if (respObj.data.token) {
                        history.push('/');
                    }
                }                
            }}>
                <fieldset className='input-fieldset'>
                    <label>User name</label>
                    <input 
                        className='input-field' 
                        type='text'
                        name='Login Name'
                        placeholder='enter your user name' 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </fieldset>

                <fieldset className='input-fieldset'>
                    <label>Password</label>
                    <input 
                        className='input-field' 
                        type='password' 
                        name='Password'
                        placeholder='password (min length 6 chars)' 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>

                {
                params.method === 'register' 
                    ? <fieldset className='input-fieldset'>
                        <label>Verify Password</label>
                            <input 
                                className='input-field' 
                                type='password' 
                                name='Verify Password'
                                placeholder='re-enter your password' 
                                onChange={(e) => setVerPass(e.target.value)}
                            />
                    </fieldset>
                    : ''
                }
                
                {
                params.method === 'register' 
                    ? <button type="submit" disabled={!password || !username || password.length < 6 || password !== verPass }>
                        Login
                    </button> 
                    : <button type="submit" disabled={!password || !username || password.length < 6 }>
                        Login
                    </button>
                }

            </form>
            {
            params.method === 'register' 
            ? <Link to="/account/login" className='link-to-reg-login'>
                Already have an account yet? Click here to log in!
            </Link> 
            : <Link to="/account/register" className='link-to-reg-login'>
                Don't have an account yet? Click here to register!
            </Link>
            }
        </div>
    </main>
</>
};

export default LogReg;