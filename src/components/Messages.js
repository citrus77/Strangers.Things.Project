import React from 'react';

import {
    SingleMessage
} from './index'

const Messages = ({ messages }) => {
    return <>
        <main className='content'>
            <header className='message-header'>
                <h2 className='header'>Your messages</h2>                
            </header>
            {
                messages.map(message => <SingleMessage key={message._id} message={message} />)
            }
        </main>
    </>;
};

export default Messages;