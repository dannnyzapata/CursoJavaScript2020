import React from 'react';
import logo from './logo.svg';
import Posts from './Posts';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import PostDetail from "./PostDetail";


function App() {
    return (
        <Router>
            <div>
                <div className="bg-dark">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark max-width-70 mx-auto">
                        <Link to="/" className="navbar-brand">Marvel</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <NavLink to="/" className="nav-item nav-link" activeClassName="active" exact>Welcome</NavLink>
                                <NavLink to="/posts" className="nav-item nav-link" activeClassName="active">Characters</NavLink>
                            </ul>
                        </div>
                    </nav>
                </div>
                
                <div className="mt-4 max-width-70 mx-auto">
                    <Switch>
                        <Route path="/" exact>
                            <h1 className="text-center">Welcome!</h1>
                            <p>This is the main page!</p>
                        </Route>
                        <Route path="/posts" exact>
                            <Posts/>
                        </Route>
                        <Route path="/posts/:id" exact>
                            <PostDetail/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
