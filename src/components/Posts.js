import React from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../util'

import {
    Search,
    SinglePost
} from './'



const Posts = ({setPosts, fetchPosts, loggedIn, posts, token, userData}) => {
    const handleDelete = async (postId) => {
        await callApi({
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
                            ? <Link to="/write" className="post-button"><img src='./img/write.png' height='18' width='18' alt='write' /> Write A New Post</Link> 
                            : <Link to="/write" className="post-button-disabled"><img src='./img/write.png' height='18' width='18' alt='write' /> Write A New Post</Link>              
                }
                <Search posts={posts} setPosts={setPosts} fetchPosts={fetchPosts} />                
            </div>
            {
                posts.map(post => <SinglePost key={post._id} post={post} loggedIn={loggedIn}>
                    {   
                        post && <Link to={`/posts/${post._id}`} className='view-post-button'>VIEW</Link>
                    }
                    {
                        post.author._id === userData._id && <Link to={`/posts/edit/${post._id}`} className='edit-post-button'>EDIT</Link>
                    }
                    {
                        post.author._id === userData._id && <button className='delete-post' onClick={() => handleDelete(post._id)}><img src={"../img/trash.png"} width='13' height='13' alt='delete' />DELETE</button>                   
                    }                    
                </SinglePost>)
            }
        </div>
    </>
}
export default Posts;