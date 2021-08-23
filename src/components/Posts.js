import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import {
    SinglePost
} from './index'

const Posts = ({posts, token}) => {
    return <>
        <main className='content'>
            <header className='post-header'>
                <Link to="/search" className="post-button">Search Posts</Link>
                <h2 className='header'>Posts</h2>
                {
                token ? <Link to="/write" className="post-button">New Post</Link> : 
                <span className='post-button disabled'>New Post</span>                
                }
            </header>
            {
                posts.map(post => <SinglePost key={post._id} post={post} />)
            }
        </main>
    </>
}
export default Posts;