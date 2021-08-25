import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router';
import { callApi } from '../util';

const LogReg = ({ setLoggedIn, setMessages, setUserData, setToken }) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ verPass, setVerPass ] = useState('');
    const params = useParams();
    const history = useHistory();


    return <>
    <div>
        
        <div className='form-container'>
            <div className='login-header'>            
                {
                params.method === 'register' 
                    ? <h3 className='header'>Register a new account</h3> 
                    : <h3 className='header'>Login to your account</h3>
                }           
            </div>
            <form className='log-reg' onSubmit={async (e) =>{
                e.preventDefault();
                try{ 
                    const resp = await callApi ({
                        url: `/users/${params.method}`,
                        method: 'POST',
                        body: {
                            user: {
                                username,
                                password
                            }
                        }
                    })
                    
                    if(resp.data) {
                        const userResp = await callApi({url: '/users/me', token: resp.data.token});

                        setToken(resp.data.token);
                        setUserData(userResp.data);
                        setLoggedIn(true);
                        setMessages(userResp.data.messages);

                        if (resp.data.token) {
                          history.push('/');
                        }
                    }
                }
                catch(error) {
                    console.error(error);
                };                
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
                    ? <button className='login-button' type="submit" disabled={!password || !username || password.length < 6 || password !== verPass }>
                        Register
                    </button> 
                    : <button className='login-button' type="submit" disabled={!password || !username || password.length < 6 }>
                        Login
                    </button>
                }

                {
                params.method === 'register' 
                ? <>
                    <span>Already have an account yet? </span>
                    <Link to="/account/login" className='link-to-reg-login'>
                        Click here to log in!
                    </Link>
                </> 
                : <>
                    <span>Already have an account yet? </span>
                    <Link to="/account/register" className='link-to-reg-login'>
                        Click here to register!
                    </Link>
                </>
                }
            </form>
            
        </div>
    </div>
</>
};

export default LogReg;