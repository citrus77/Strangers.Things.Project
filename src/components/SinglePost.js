import React from 'react';

const SinglePost = ({ children, post, setIsExpanded }) => {
    
    return post
    ? <div className='post-listing' onClick={e =>
        console.log('clicked')}>
        <span className='single-post-title'><h3 className='post-title'>{post.title}</h3><span className='author'>by <span className='post-author'>{post.author.username}</span></span></span>
        <span className='description'>{post.description}</span>
        <br />
        <span className='post-bottom'>
            <span className="post-bottom-elem"><h3 className='post-elem-header'>Price:</h3> {post.price}</span> 
            <span className="post-bottom-elem"><h3 className='post-elem-header'>Location:</h3> {post.location}</span>
            <span className="post-bottom-elem"><h3 className='post-elem-header'>Will Deliver:</h3> { post.willDeliver ? 'Yes' : 'No' }</span>
            { children }            
        </span>        
    </div>
    : 'Loading...'
}

export default SinglePost;