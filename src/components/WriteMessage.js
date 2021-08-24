import React, { useState } from 'react';
import { callApi } from '../util';

const WriteMessage = ({currentPostId, post, token}) => {
    const [content, setContent] = useState('');

    const handleWriteMessage = async () => {
        const msgResp = await callApi({
            url: '/posts/${currentPostId}/messages', 
            method: 'POST', 
            token, 
            body: {
                message: {
                    content
                }
            }
        });
    }

    return <>
        <main className='content'>
            <form onSubmit={handleWriteMessage}>
                <fieldset>
                    <input name='content' placeholder='Write a reply' value={content} onChange={(e)=>
                    setContent(e.target.value)}>
                    </input>
                    <button type='submit' disabled={ !content || !token }>Send</button>
                </fieldset>
            </form>
        </main>
    </>;

}

export default WriteMessage;