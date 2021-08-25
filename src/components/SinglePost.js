import React from 'react';

const SinglePost = ({ children, post, setIsExpanded }) => {
    
    return post
    ? <div className='post-listing' onClick={e =>
        console.log('clicked')}>
        <h3 className='post-title'>{post.title}</h3>
        <span className='description'>{post.description}</span>
        <br />
        <span className='post-bottom'>
            <h3 className='post-el-header'>Price:</h3> {post.price} <h3 className='post-el-header'>Location:</h3> {post.location} 
            <h3 className='post-el-header'>Will Deliver:</h3> { post.willDeilver ? 'yes' : 'no' }
            { children }            
        </span>        
    </div>
    : 'Loading...'
}

export default SinglePost;