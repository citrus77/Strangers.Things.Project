import React from 'react';

import {
    SingleMessage
} from './index'

const Messages = ({ messages }) => {
    return <div>
            <div className='message-header'>
                <h2 className='header'>Your messages</h2>                
            </div>
            {
                messages.map(message => <SingleMessage key={message._id} message={message} />)
            }
        </div>;
};

export default Messages;