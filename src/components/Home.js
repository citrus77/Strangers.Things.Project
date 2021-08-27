import React from 'react';
import { Link } from 'react-router-dom'

import {
    Messages
} from './index'

const Home = ({ loggedIn, messages, userData }) => {
    const posts = userData.posts;
    if (loggedIn) 
    return <div className='content'>
        {
        userData 
                ? <h2 className='page-header'>Welcome {`${userData.username}`} </h2> 
                : ''
        }
        <Link to="/write" className="post-button">New Post</Link>
        <Messages className='messages' userData={userData} messages={messages} />
        <div className='prev-posts'>
            {
            posts ? <h3 className='prev-posts-head'>Your previous posts</h3> : ''
            }

            {
            posts ? posts.map(post => {
                return <span className='prev-post' key="post._id"><h3 className='prev-post-title'>{post.title}:</h3>  {post.description}</span>
            }) : ''
            }
        </div>
    </div>
    
    else return <div className='content'>
        <h2 className='page-header'>Welcome Guest!</h2>
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