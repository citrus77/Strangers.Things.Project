import React from 'react';
import { Link } from 'react-router-dom'

import {
    Messages
} from './index'

const Home = ({ loggedIn, messages, userData }) => {
    if (loggedIn) 
    return <div>
        {
        userData 
                ? <h2 className='header'>Welcome {`${userData.username}`} </h2> 
                : ''
        }
        <Link to="/write" className="post-button">New Post</Link>
        <Messages userData={userData} messages={messages} />
    </div>
    
    else return <div>
        <h2 className='header'>Welcome Guest!</h2>
        <br />
        <div>
            <Link to='/account/login' className='link-to-reg-login'>Click here</Link> to log in or register!
        </div>
        <div>
            <Link to='/posts' className='link-to-reg-login'>Click here</Link> to view the posts!
        </div>
    </div>
};

export default Home;