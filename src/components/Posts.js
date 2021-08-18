import React, { useState, useEffect } from 'react';
import { APIURL } from '../api'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    console.log(posts)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${APIURL}/posts/`);            
            const results = await response.json();
            setPosts(results.data.posts);
        }
        fetchPosts()
    }, [])
    
    return <>
        <main>
            <header className='post-header'>
                <span className='placeholder' />
                <h1 className='header'>Posts</h1>
                <span className='placeholder'><Link to="/write" className="button write-link">New Post</Link></span>
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