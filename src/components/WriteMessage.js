import React, { useState } from 'react';
import { callApi } from '../util';
import { useHistory } from 'react-router';

const WriteMessage = ({post, token}) => {
  const [content, setContent ] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = `/posts/${post._id}/messages`;
        const data = await callApi({
            method: 'POST',
            url,
            token,
            body: {
                message: {
                content
                }
            }
        });
        history.push('./')
    }
    catch (error) {
        console.error(error)
    }
    
  };
  return <>
    <form onSubmit={handleSubmit} className='search-form'>
      <input className='search-input' value={content} placeholder="Write a reply" onChange={(e) => setContent(e.target.value)}></input>
      <button className='search-button' type="submit" disabled={!content}>Send</button>
    </form>
  </>
}

export default WriteMessage;