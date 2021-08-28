import React from 'react';

import {
    SingleMessage
} from './index'

const Messages = ({ userData, messages }) => {
    console.log(messages)
    return <div className='messages'>
            <div className='message-header'>
                <h2 className='header'>Your messages</h2>                
            </div>
            {
                messages.map(message => message.fromUser._id !== userData.id ? <SingleMessage key={message._id} message={message} /> : null)
            }
        </div>;
};

export default Messages;