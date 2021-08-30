import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({ loggedIn, messages, userData }) => {
    const posts = userData.posts;
    if (loggedIn) 
    return <div className='content'>
        {
        userData 
                ? <h2 className='page-header'>Welcome {`${userData.username}`} </h2> 
                : ''
        }
        <Link to="/write" className="post-button"><img src='./img/write.png' height='18' width='18' alt='write' /> Write A New Post</Link>
        <div className='prev-msgs'>
          <h3 className='prev-msgs-head'>Messages Received</h3>
          {
            messages.map(message => {
              return <>
              {userData._id !== message.fromUser._id ?
               <div className='prev-msg'>
                   <div className='prev-msg-title'>{message.fromUser.username} comented on "{message.post.title}":</div>
                   <div>{message.content}</div>
                </div>
              : ''}
              </>
            })
          }
          <h3 className='prev-msgs-head'>Messages Sent</h3>
          {
            messages.map(message => {
              return <>
              {userData._id === message.fromUser._id ?
               <div className='prev-msg'>
                   <div className='prev-usrmsg-title'>You comented on "{message.post.title}":</div>
                   <div>{message.content}</div>
                </div>
              : ''}
              </>
            })
          }
        </div>
        <div className='prev-posts'>
            {
            posts ? <h3 className='prev-posts-head'>Your previous posts</h3> : ''
            }

            {
            posts ? posts.map(post => {
                return <>
                    <div className='prev-post' key="post._id">
                        <div className='prev-post-title' post={post}>{post.title}{!post.active && ` (DELETED)`}:</div>
                        <div>{post.description}</div>
                    </div>
                </>
            }) : ''
            }
        </div>
    </div>
    
    else return <div className='content welcome'>
        <h2 className='page-header'>Welcome Guest!</h2>
        <br />
        <div className='guest'>You can find all sorts of knick-knacks here from people all around the world! Please create an account or log in in order to create a new listing or comment on an existing post.</div>
        <div className='guest'>
            <Link to='/account/login' className='link-to-reg-login'>Click here</Link> to log in or register!
        </div>
        <div className='guest'>
            <Link to='/posts' className='link-to-reg-login'>Click here</Link> to view the posts!
        </div>
    </div>
};

export default Home;