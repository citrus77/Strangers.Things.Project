import React, { useState } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { callApi } from '../util'

import {
    SinglePost,
    WriteMessage
} from './'



const Posts = ({currentPostId, fetchPosts, posts, setActive, setCurrentPostId, token, userData}) => {            
    const [content, setContent] = useState('');
    console.log(posts)
    const history = useHistory();

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/posts/${postId}`,
            token
        });

        await fetchPosts()
    }

    const handleReply =  async () => {

        return <>
            <form onSubmit={
                await callApi({
                    url: '/posts/${currentPostId}/messages', 
                    method: 'POST', 
                    token, 
                    body: {
                        message: {
                            content
                        }
                    }
                })
            }>
                <fieldset>
                    <input name='content' placeholder='Write a reply' value={content} onChange={(e)=>
                        setContent(e.target.value)}>
                    </input>
                    <button type='submit' disabled={ !content || !token }>Send</button>
                </fieldset>
            </form>
        </>
    }

    return <>
        <div className='content'>
            <div className='posts-header'>
                <Link to="/search" className="post-button">Search Posts</Link>
                <h2 className='header'>Posts</h2>
                {
                    token 
                            ? <Link to="/write" className="post-button">New Post</Link> 
                            : <span className='post-button disabled'>New Post</span>                
                }
            </div>
            {
                posts.map(post => <SinglePost key={post._id} post={post}>
                    {
                        post.author._id ===  userData._id && <button onClick={() => handleDelete(post._id)}>Delete post</button>                   
                    }
                    {   
                        post.author._id !==  userData._id && <button onClick = { handleReply && setCurrentPostId(post._id) }>Reply</button>  
                    }
                </SinglePost>)
            }
        </div>
    </>
}
export default Posts;