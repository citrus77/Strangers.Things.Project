import React from 'react';

const SingleMessage = ({message}) => {
    return message
    ? <div className="message-listing">
        <h3 className='message-content'>{message.content}</h3>
        <span className='message-sender'>{message.fromUser.username}</span>
    </div>
    : 'Loading...'
}

export default SingleMessage;