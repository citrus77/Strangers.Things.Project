import React from 'react';

const SingleMessage = ({message}) => {
    return message
    ? <div className="message-listing">
        <h4 className='message-header'>{message.fromUser.username} commented on "{message.post.title}"</h4>
        <span className='message-content'>{message.content}</span>
        
    </div>
    : 'Loading...'
}

export default SingleMessage;