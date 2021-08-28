import React from 'react';

const SingleMessage = ({message}) => {
    return message
    ? <div className="message-listing">
        <div className='message-header'>{message.fromUser.username} commented on "{message.post.title}"</div>
        <span className='message-content'>{message.content}</span>        
      </div>
    : 'Loading...'
}

export default SingleMessage;