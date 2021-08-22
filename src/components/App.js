import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'

import {
    Home,
    LogReg,
    Posts,
    Profile,
    Search,
    Write
} from './index.js'

const App = () => {
    const [ loggedIn, setLoggedIn ] = useState(false);  
    const [ token, setToken ] = useState('');
    const [ userData, setUserData ] = useState({});
    const [ messages, setMessages ] = useState([]);

    return (    
      <main className="content">
        <header className="page-header">
          <Link to ='/home' className='logo'><h1>Stranger's Things</h1></Link>       
  
          <div id='nav'>
            <span className="link-bar">
              <Link to="/posts" className="nav-link">Posts</Link>   
              { token
                ?
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                :
                ''
              }
              { token
                ?
                  <button onClick={() => { setToken(''); setLoggedIn(false)}} className='nav-link logout'>Log out</button>
                : 
                  <Link to="/account/login" className="nav-link">
                    Login/Register
                  </Link>
              }
            </span>
          </div>
        </header>
  
        <div id='content'>
          <Route path="/account/:method">
            <LogReg setToken={setToken} setLoggedIn={setLoggedIn}/>
          </Route>
  
          <Route path="/posts">
            <Posts token={token}/>
          </Route>

          <Route path="/profile">
            <Profile messages={messages} setMessages={setMessages} token={token} userData={userData} setUserData={setUserData}/>
          </Route>

          <Route path="/search">
            <Search />
          </Route>
  
          <Route path="/write">
            <Write token={token} />
          </Route>
  
          <Route exact path="/">
            <Home userData={userData}/>
          </Route>
        </div>
  
      </main>
    )
  }

  export default App;