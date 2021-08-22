import React, { useState } from 'react';

const { REACT_APP_BASE_URL } = process.env;

const Write = ({ token }) => {
    const [ location, setLocation ] = useState('')
    const [ title, setTitle ] = useState('');    
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ willDeliver, setWillDeliver ] = useState(false);

    return <>
        <h3>Post a new listing!</h3>

        <form onSubmit ={async (e) => {
            e.preventDefault();
            try{
            fetch(`${REACT_APP_BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        location,
                        title,
                        description,
                        price,
                        willDeliver
                    }
                })
                })
            } catch(error) {
                console.error(error)
            }
        }}>
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
                    onChange={(e) => setPrice('$' + e.target.value)}
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
            <button disable={ !title || !description }></button>
        </form>
    </>
}

export default Write;