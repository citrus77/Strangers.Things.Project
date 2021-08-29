import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import {
  EditPost,
  Footer, 
  LogReg,
  Posts,
  Home,
  PostView,
  Search,
  WriteMessage,
  WritePost
} from './'

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
  const [ active, setActive ] = useState(false);
  const [ currentPostId, setCurrentPostId ] = useState('');
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ messages, setMessages ] = useState([]);
  const [ posts, setPosts ] = useState([]);  
  const [ token, setToken ] = useState('');
  const [ userData, setUserData ] = useState({});
  const [ isExpanded, setIsExpanded ] = useState(false)
  
  const history = useHistory();

  const fetchPosts = async () => {
    const response = await fetch(`${REACT_APP_BASE_URL}/posts`);            
    const results = await response.json();
    const posts = results.data.posts;
    if (posts) setPosts(posts);
  }
  
  const props = {
    active,
    setActive,
    currentPostId,
    setCurrentPostId, 
    loggedIn, 
    setLoggedIn, 
    token, 
    setToken, 
    posts, 
    setPosts, 
    userData, 
    setUserData, 
    messages, 
    setMessages,
    isExpanded,
    setIsExpanded,

    fetchPosts
  }

  

  useEffect(() => {
    try {      
      fetchPosts();      
    } catch (error) {
      console.error(error);
    } 
  }, [token]);

  return <>
      <header className="site-header">
        <Link to ='/home' className='logo'><h1>Stranger's Things</h1></Link>       
  
        <div className='link-bar'>
          <Link to="/posts" className="nav-link">Posts</Link>   
          <Link to="/home" className="nav-link">Home</Link>
          { 
            token
                  ? <button onClick={() => { setToken(''); setLoggedIn(false); history.push('./')}} className='nav-link logout set-right'>Log out</button>
                  : <Link to="/account/login" className="nav-link set-right">Login/Register</Link>
          }
        </div>
      </header>
  
      <main id='content'>
        <Route exact path="/account/:method">
          <LogReg {...props} />
        </Route>

        <Route exact path='/'>
          <Home {...props} />
        </Route>

        <Route exact path="/home">
          <Home {...props}/>
        </Route>
  
        <Route exact path="/posts">
          <Posts {...props} />
        </Route>

        <Route exact path="/search">
          <Search {...props} />
        </Route>

        <Route exact path='/posts/:postId'>
          <PostView {...props} />
        </Route>

        <Route exact path='/posts/edit/:postId'>
          <EditPost {...props} />
        </Route>
  
        <Route exact path="/write">
          <WritePost {...props} />
        </Route>

        <Route exact path='/message'>
          <WriteMessage {...props} />
        </Route>
    </main>
    <Footer />
  </>
}

export default App;