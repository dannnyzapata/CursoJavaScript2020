import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import PostsComponent from './components/PostsComponent';
import DetalleComponent from './components/DetalleComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">Posts</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/">Welcome</NavLink>
              <NavLink className="nav-item nav-link" activeClassName="active" to="/posts">Superhero List</NavLink>
            </div>
          </div>
        </nav>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome</h1>
        </Route>
        <Route path="/posts" exact> 
          <PostsComponent></PostsComponent>
        </Route>
        <Route path="/posts/:id" exact> 
          <DetalleComponent></DetalleComponent>
        </Route>
      </Switch>
    </div>
</Router>
  );
}

export default App;
