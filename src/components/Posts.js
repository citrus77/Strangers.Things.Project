import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { callApi } from '../util'
import {
    SinglePost
} from './'

const Posts = ({fetchPosts, posts, token}) => {
    console.log(posts)

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `posts/${postId}`,
            token
        });

        await fetchPosts()
    }


    return <>
        <main className='content'>
            <header className='post-header'>
                <Link to="/search" className="post-button">Search Posts</Link>
                <h2 className='header'>Posts</h2>
                {
                    token 
                            ? <Link to="/write" className="post-button">New Post</Link> 
                            : <span className='post-button disabled'>New Post</span>                
                }
            </header>
            {
                posts.map(post => <SinglePost key={post._id} post={post}>
                   {
                       token && <button onClick={() => handleDelete(post._id)}>Delete post</button>
                   }
                </SinglePost>)
            }
        </main>
    </>
}
export default Posts;