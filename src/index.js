import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {
  Account,
  Login,
  Posts,
  Register,
  Search,
  Write
} from './components';

const App = (props) => {
  return (
  <Router>    
    <div className="app">
      {/* render coomponents here */}
      <header class="page-header">
        <h1>Stranger's Things</h1>
      </header>
      <div id='nav'>
        <Link to="/write" class="nav-link">New Post</Link>
        <Link to="/posts" class="nav-link">Posts</Link>        
        <Link to="/account" class="nav-link">Account</Link>        
        <Link to="/login" class="nav-link">Login</Link>        
        <Link to="/register" class="nav-link">Register</Link>
      </div>

      <div id='main'>
        <Route path="/account">
          <Account />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/write">
          <Write />
        </Route>

        <Route exact path="/">
          <Login/>
        </Route>
      </div>

    </div>
  </Router>
  )
}

ReactDOM.render(
  <App />, 
  document.querySelector('#app')
);