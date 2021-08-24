import React from 'react';

const SinglePost = ({post}) => {
    return post
    ? <div className="post-listing">
        <h3 className='post-title'>{post.title}</h3>
        <span className='description'>{post.description}</span>
        
    </div>
    : 'Loading...'
}

export default SinglePost;