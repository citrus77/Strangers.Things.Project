import React, { useState, useEffect } from 'react';
import { APIURL } from '../api'
import { BrowserRouter as Router,  Link } from 'react-router-dom'


const Posts = ({token}) => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${APIURL}/posts/`);            
            const results = await response.json();
            setPosts(results.data.posts);
        }
        fetchPosts()
    }, [])
    
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
            posts.map(post => <div key={post._id} className="post-listing">
                <h3 className='post-title'>{post.title}</h3>
                <span className='description'>{post.description}</span>
            </div>
            )}
        </main>
    </>
}
export default Posts;