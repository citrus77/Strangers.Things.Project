import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { callApi } from '../util'

import {
    Search,
    SinglePost
} from './'



const Posts = ({fetchPosts, loggedIn, posts, token, userData}) => {
    const history = useHistory();

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });

        await fetchPosts()
    }

    return <>
        <div>
            <div className='posts-header'>
                <h2 className='page-header'>Posts</h2>
                {
                    token 
                            ? <Link to="/write" className="post-button">New Post</Link> 
                            : <span className='post-button disabled'>New Post</span>                
                }
                <Search />                
            </div>
            {
                posts.map(post => <SinglePost key={post._id} post={post} loggedIn={loggedIn}>
                    {   
                        post && <Link to={`/posts/${post._id}`} className='view-post-button'>VIEW</Link>
                    }
                    {
                        post.author._id === userData._id && <button className='delete-post' onClick={() => handleDelete(post._id)}><img src={"../img/trash18px.png"} width='13' height='13' />DELETE</button>                   
                    }
                </SinglePost>)
            }
        </div>
    </>
}
export default Posts;