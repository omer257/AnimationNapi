import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Bounce from './Bounce'
import Fetch from './Fetch'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Animation</NavLink>
            </li>
            <li>
              <NavLink to="/api">Api</NavLink>
            </li> 
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/api">
            <Fetch />
          </Route> 
          <Route path="/">
            <Bounce />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}