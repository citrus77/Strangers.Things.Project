import React from 'react';
import { Link } from 'react-router-dom'

import {
    Messages
} from './index'

const Home = ({ loggedIn, messages, userData }) => {
    const posts = userData.posts;
    console.log(posts)
    if (loggedIn) 
    return <div className='content'>
        {
        userData 
                ? <h2 className='page-header'>Welcome {`${userData.username}`} </h2> 
                : ''
        }
        <Link to="/write" className="post-button">New Post</Link>
        <div>
            <Messages className='messages' userData={userData} messages={messages} />
        </div>
        <div className='prev-posts'>
            {
            posts ? <h3 className='prev-posts-head'>Your previous posts</h3> : ''
            }

            {
            posts ? posts.map(post => {
                return <>
                    <div className='prev-post' key="post._id">
                        <div className='prev-post-title' post={post}>{post.title}:</div>
                        <div>{post.description}</div>
                    </div>
                </>
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