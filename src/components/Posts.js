import React from 'react';

import { 
    fetchPosts
  } from '../api';

const Posts = () => {
    const posts = fetchPosts()
    try {
        posts.map(post => {
            return (<div class="post" key={post._id}>
                <h2>{post.title}</h2>
                <span>from: {post.author.username}</span>
                <span>{post.description}</span>
            </div>)
        })
    } 
    catch(err) {
        console.error(err)
    }
    finally {
        console.log(posts)
    }
    return <span>Posts</span>
}

export default Posts;