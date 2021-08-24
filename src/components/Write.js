import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { callApi } from '../util';

const Write = ({ fetchPosts, setPosts, token }) => {
    const [ location, setLocation ] = useState('')
    const [ title, setTitle ] = useState('');    
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ willDeliver, setWillDeliver ] = useState(false);
    
    const history = useHistory();

    const handleWrite = async (e) => {
        e.preventDefault();
        const postResp = await callApi({
            url: '/posts', 
            method: 'POST', 
            token, 
            body: {
                post: {
                    location, 
                    title, 
                    description, 
                    price, 
                    willDeliver
            }
        }
        })
        const postsResp = await callApi({url: '/posts', token})
        setPosts(postsResp.data.posts);
        history.push('/posts')
    }

    return <>
        <h3>Post a new listing!</h3>

        <form onSubmit = {handleWrite}>
            <fieldset>
                <label>Title</label>
                <input 
                    className='input-field' 
                    type='text' 
                    name='title'
                    value={title}  
                    placeholder='Title' 
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
                    placeholder='Description'
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
                    placeholder='$0.00' 
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
                    placeholder='Location' 
                    onChange={(e) => setLocation(e.target.value)}
                />
            </fieldset>

            <fieldset>
                <label>Will deliver item</label>
                <select
                    name='willDeliver' 
                    placeholder='No'
                    value={willDeliver}                    
                    onChange={(e) => setWillDeliver(e.target.value)}>
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                </select>
            </fieldset>
            <button type='submit' disabled={ !title || !description || !price }>Post</button>
        </form>
    </>
}

export default Write;