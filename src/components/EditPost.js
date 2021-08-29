import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';

import { callApi } from '../util';

import SinglePost from './SinglePost'

const EditPost = ({ setPosts, posts, token }) => {
    const [ location, setLocation ] = useState('')
    const [ title, setTitle ] = useState('');    
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ willDeliver, setWillDeliver ] = useState(false);
        
    const {postId} = useParams();
    const history = useHistory();

    const post = posts.find(post => post._id === postId);

    const handleWrite = async (e) => {
        e.preventDefault();
        const postResp = await callApi({
            url: `/posts/${postId}`, 
            method: 'PATCH', 
            token, 
            body: {
                post: {
                    location, 
                    title, 
                    description, 
                    price: `$${price}`, 
                    willDeliver
                }
            }
        });
        const postsResp = await callApi({url: '/posts', token})
        setPosts(postsResp.data.posts);
        history.push('/posts')
    }

    return <div>
        <h3>Edit Post</h3>

        <SinglePost post={post}></SinglePost>

        <form onSubmit={handleWrite}>
            <fieldset>
                <label>Title</label>
                <input 
                    className='input-field' 
                    type='text' 
                    name='title'
                    value={title}  
                    placeholder={`${post.title}`} 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </fieldset>

            <fieldset>
            <label>Description</label>
                <input 
                    className='input-field' 
                    type='text' 
                    name='description'
                    value={description}  
                    placeholder={`${post.description}`}
                    style={{height: 100}} 
                    onChange={(e) => setDescription(e.target.value)}
                />
            </fieldset>

            <fieldset>
            <label>Price</label>
                <input 
                    className='input-field' 
                    type='number' 
                    name='price'
                    min="1"
                    step="any"
                    value={price}  
                    placeholder={`${post.price}`}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </fieldset>

            <fieldset>
                <label>Location</label>
                <input 
                    className='input-field' 
                    type='text' 
                    name='title'
                    value={location}  
                    placeholder={`${post.location}`} 
                    onChange={(e) => setLocation(e.target.value)}
                />
            </fieldset>

            <fieldset>
                <label>Will deliver item</label>
                <select
                    name='willDeliver' 
                    placeholder={`${post.willDeliver}`}
                    value={willDeliver}                    
                    onChange={(e) => setWillDeliver(e.target.value)}>
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                </select>
            </fieldset>
            <button type='submit' disabled={ !title || !description || !price } className='edit-post-button'>Post</button>
        </form>
    </div>;
};

export default EditPost;