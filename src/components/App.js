import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'

import {
    Account,
    Login,
    LogReg,
    Posts,
    Register,
    Search,
    Write
} from './index.js'

const App = () => {  
    const [ token, setToken ] = useState('');
    const [ user, setUser ] = useState('');

    return (    
      <main className="content">
        <header className="page-header">
          <h1 className='logo'>Stranger's Things</h1>        
  
          <div id='nav'>
            <span className="link-bar">
              <Link to="/posts" className="nav-link">Posts</Link>   
              <Link to="/account" className="nav-link">Account</Link>
              { token ? <button onClick={() => setToken('')} className='nav-link logout'>Log out</button>
                : <Link to="/account/login" className="nav-link">Login/Register</Link>
              }
            </span>
          </div>
        </header>
  
        <div id='content'>

          <Route path="/account">
            <Account />
          </Route>
  
          {/* <Route path="/account/login">
            <Login setToken={setToken} setUser={setUser} />
          </Route> */}

          <Route path="/account/:method">
            <LogReg setToken={setToken} setUser={setUser} />
          </Route>
  
          <Route path="/posts">
            <Posts token={token}/>
          </Route>
{/* 
          <Route path="/account/register">
            <Register setToken={setToken} setUser={setUser} />
          </Route> */}
  
          <Route path="/search">
            <Search />
          </Route>
  
          <Route path="/write">
            <Write token={token} />
          </Route>
  
          <Route exact path="/">
            <Posts token={token}/>
          </Route>

        </div>
  
      </main>
    )
  }

  export default App;