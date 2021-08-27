import React from 'react';
import { useParams } from 'react-router';

import SinglePost from './SinglePost';
import WriteMessage from './WriteMessage';

const PostView = ({posts, loggedIn, userData, token}) => {
  const {postId} = useParams();
  const post = posts.find(post => post._id === postId);
   
  return <>
    <SinglePost post={post}>
      {
         post && post.comments && post.comments.map(comment => <div key={comment.id}>Comment: {comment.content}</div>)
      }
      {
        loggedIn && userData._id !== post.author._id && <WriteMessage post={post} token={token}/>
      }
    </SinglePost>
  </>
}

export default PostView;